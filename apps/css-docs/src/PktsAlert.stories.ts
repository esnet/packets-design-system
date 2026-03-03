import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Components/PktsAlert',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['info', 'success', 'warning', 'error'],
    },
    title: {
      control: 'text',
    },
    message: {
      control: 'text',
    },
  },
  render: (args) => {
    const alert = document.createElement('div');
    alert.className = `pkts-alert pkts-${args.variant || 'info'}`;

    // Icon aside
    const iconAside = document.createElement('aside');
    iconAside.className = 'icon';

    // Icon SVGs for each variant
    const icons = {
      info: '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>',
      success: '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
      warning: '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>',
      error: '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>',
    };

    iconAside.innerHTML = icons[args.variant || 'info'] || icons.info;
    alert.appendChild(iconAside);

    // Content div
    const contentDiv = document.createElement('div');
    contentDiv.className = 'content';

    if (args.title) {
      const title = document.createElement('h5');
      title.className = 'title';
      title.textContent = args.title;
      contentDiv.appendChild(title);
    }

    if (args.message) {
      const message = document.createElement('p');
      message.textContent = args.message;
      contentDiv.appendChild(message);
    }

    alert.appendChild(contentDiv);

    // Close button aside (hidden by default in CSS version)
    const closeAside = document.createElement('aside');
    closeAside.className = 'icon';
    closeAside.innerHTML = '<button class="close-button" style="display: none;"></button>';
    alert.appendChild(closeAside);

    return alert;
  },
};

export default meta;

type Story = StoryObj;

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    message: 'This is an informational alert message',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    message: 'Operation completed successfully',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    message: 'Please review this warning carefully',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    message: 'An error has occurred during processing',
  },
};
