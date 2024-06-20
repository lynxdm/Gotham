interface GtagConfig {
  page_path?: string;
  page_title: string;
  page_location: string;
  send_page_view?: boolean;
  event_category?: string;
  event_label?: string;
  value?: number | undefined;
  // Add other properties as needed
}

interface Window {
  gtag(type: 'config' | 'event', trackingId: string, config?: Partial<GtagConfig>): void;
}

declare const window: Window & typeof globalThis;
