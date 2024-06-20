interface EventArgs {
  action: string;
  category: string;
  label: string;
  value?: number;
}

export const GA_TRACKING_ID = 'G-DEVFEST2024'; // replace it with the GA Tracking or Measurement ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events

export const event = ({ action, category, label, value }: EventArgs) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
