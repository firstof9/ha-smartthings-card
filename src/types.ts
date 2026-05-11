export interface HassEntityState {
  state: string;
  attributes: {
    friendly_name?: string;
    unit_of_measurement?: string;
    [key: string]: unknown;
  };
}

export interface HomeAssistant {
  states: Record<string, HassEntityState>;
  locale?: { language?: string };
  language?: string;
}

export interface SmartthingsCardConfig {
  type: string;
  name?: string;
  entity?: string;
}
