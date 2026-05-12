import { HomeAssistant } from '../src/types';

export const mockHass: Partial<HomeAssistant> = {
  states: {
    'sensor.microwave_job_state': {
      entity_id: 'sensor.microwave_job_state',
      state: 'cooking',
      attributes: {
        friendly_name: 'Microwave Job State',
      },
      last_changed: '2026-05-12T16:00:00Z',
      last_updated: '2026-05-12T16:00:00Z',
      context: { id: '1', parent_id: null, user_id: null },
    },
    'sensor.microwave_time_remaining': {
      entity_id: 'sensor.microwave_time_remaining',
      state: '2026-05-12T16:01:00Z',
      attributes: {
        friendly_name: 'Microwave Time Remaining',
      },
      last_changed: '2026-05-12T16:00:00Z',
      last_updated: '2026-05-12T16:00:00Z',
      context: { id: '2', parent_id: null, user_id: null },
    },
  },
  callService: async (domain, service, data) => {
    console.log(`Called ${domain}.${service}`, data);
  },
};
