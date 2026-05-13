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
  callService(domain: string, service: string, data?: Record<string, any>): Promise<void>;
}

export interface SmartthingsCardConfig {
  type: string;
  appliance_type: 'microwave' | 'oven' | 'dishwasher' | 'washer' | 'dryer' | 'refrigerator';
  device_id?: string;
  power_entity?: string;
  mode_entity?: string;
  job_state_entity?: string;
  machine_state_entity?: string;
  time_entity?: string;
  door_entities?: string[];
  fridge_temp_entity?: string;
  freezer_temp_entity?: string;
  ice_maker_entity?: string;
  filter_status_entity?: string;
  filter_reset_entity?: string;
  wifi_entity?: string;
  lock_entity?: string;
  fan_entity?: string;
  light_entity?: string;
  appliance_image?: string;
  background_color?: string;
  state_images?: Record<string, string>;
}
