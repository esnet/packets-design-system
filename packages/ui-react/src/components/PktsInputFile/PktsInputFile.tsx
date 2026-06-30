import clsx from "clsx";
import { Upload, X } from "lucide-react";
import React, {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import PktsButton from "../PktsButton";
import { type PktsInputFileProps } from "./PktsInputFile.types";

const PktsInputFile = forwardRef<HTMLInputElement, PktsInputFileProps>(
  (
    {
      variant = "default",
      label,
      className,
      showFilenames = true,
      asButton = false,
      maxFiles = Infinity,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const internalRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => internalRef.current!, []);
    const [files, setFiles] = useState<FileList>();

    const labelText =
      label ?? "Click to select files or drag and drop files here";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        if (e.target.files.length > maxFiles) {
          return;
        }
        setFiles(e.target.files);
      }
      onChange?.(e);
    };

    const filenames = useMemo(
      () =>
        Array.from(files ?? []).map(
          ({ name, lastModified }): [string, number] => [name, lastModified],
        ),
      [files],
    );

    const handleRemoveItem = (filename: string, fileLastModified: number) => {
      // use dataTransfer object, this is the only way we can actually
      // create an event that returns a fileList rather than an array of files
      const dataTransfer = new DataTransfer();

      const fileArray = Array.from(files ?? []);

      for (const file of fileArray) {
        // filter out objects based on both filename and mod date for better accuracy
        if (
          `${file.name}${file.lastModified}` !==
          `${filename}${fileLastModified}`
        ) {
          dataTransfer.items.add(file);
        }
      }

      // manually trigger input ref onChange handler with filtered file array
      const input = internalRef.current;
      if (!input) return;

      input.files = dataTransfer.files;
      // this triggers handleChange function
      input.dispatchEvent(new Event("change", { bubbles: true }));
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();

      const input = internalRef.current;
      if (!input || e.dataTransfer.files.length > maxFiles) return;

      input.files = e.dataTransfer.files;

      // this triggers handleChange function
      input.dispatchEvent(new Event("change", { bubbles: true }));
    };

    return (
      <div className={clsx("pkts-input-file-wrapper", asButton && className)}>
        <input
          className="pkts-input-file-hidden"
          type="file"
          ref={internalRef}
          onChange={handleChange}
          {...rest}
          multiple={maxFiles > 1}
        ></input>
        {asButton ? (
          <PktsButton
            className="pkts-input-file-btn"
            variant={variant === "branded" ? variant : "tertiary"}
            onClick={() => internalRef.current?.click()}
          >
            {label ?? "Browse Files"}
          </PktsButton>
        ) : (
          <div
            onClick={() => internalRef.current?.click()}
            className={clsx("pkts-input-file", variant, className)}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <Upload />
            <span>{labelText}</span>
          </div>
        )}
        {showFilenames && (
          <div className="pkts-input-file-filenames">
            {!filenames?.length && (
              <div className="pkts-input-file-filename-item">
                No files chosen{" "}
                {maxFiles < Infinity &&
                  `(max ${maxFiles} file${maxFiles > 1 ? "s" : ""})`}
              </div>
            )}
            {filenames.map(([name, lastModified]) => (
              <div
                key={`${name}${lastModified}`}
                className="pkts-input-file-filename-item"
              >
                <span>{name}</span>
                <X
                  onClick={() => handleRemoveItem(name, lastModified)}
                  className="pkts-input-file-filename-x-icon"
                  size="0.67em"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
);

PktsInputFile.displayName = "PktsInputFile";

export default PktsInputFile;
