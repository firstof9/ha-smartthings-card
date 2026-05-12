# Smartthings Card

A custom Home Assistant card for Smartthings devices.

![Logo](https://raw.githubusercontent.com/firstof9/ha-smartthings-card/main/screenshots/logo.png)

## Installation

### HACS (Recommended)

1. Go to HACS -> Frontend
2. Click on the three dots in the top right corner and select "Custom repositories"
3. Add `https://github.com/firstof9/ha-smartthings-card` as a "Lovelace" repository
4. Click "Install"

### Manual

1. Download `smartthings-card.js` from the [latest release](https://github.com/firstof9/ha-smartthings-card/releases/latest) and copy it to your `<config>/www/` directory.
2. Add the following to your `configuration.yaml` or through the UI resources:

```yaml
lovelace:
  resources:
    - url: /local/smartthings-card.js
      type: module
```

## Configuration

This card supports a fully featured Visual Editor in the Home Assistant UI. Simply add the card, select your SmartThings device, and the editor will automatically discover and populate the relevant entities.

For manual YAML configuration:

| Name | Type | Requirement | Description |
| --- | --- | --- | --- |
| `type` | string | **Required** | `custom:smartthings-card` |
| `device_id` | string | **Required** | The SmartThings device ID. |
| `appliance_type` | string | **Optional** | `microwave`, `oven`, `dishwasher`, `washer`, `dryer`, `refrigerator`. Defaults to `microwave`. |
| `power_entity` | string | **Optional** | The entity ID for power state (switch or binary_sensor). |
| `mode_entity` | string | **Optional** | The entity ID for the current appliance mode. |
| `machine_state_entity` | string | **Optional** | The entity ID for the machine state. |
| `job_state_entity` | string | **Optional** | The entity ID for the current job state. |
| `time_entity` | string | **Optional** | The entity ID for completion time or time remaining (supports live countdown). |
| `wifi_entity` | string | **Optional** | The entity ID for WiFi connection status. |
| `lock_entity` | string | **Optional** | The entity ID for child lock status. |

### Refrigerator Specific Options
| Name | Type | Requirement | Description |
| --- | --- | --- | --- |
| `fridge_temp_entity` | string | **Optional** | The entity ID for the main fridge temperature. |
| `freezer_temp_entity` | string | **Optional** | The entity ID for the freezer temperature. |
| `door_entities` | list | **Optional** | A list of binary_sensor entity IDs for the doors. Overlays map automatically based on entity name (`cooler`, `coolselect`, `freezer`). |
| `ice_maker_entity` | string | **Optional** | The entity ID for the ice maker switch. |
| `filter_status_entity`| string | **Optional** | The entity ID for the water filter usage/health percentage. |
| `filter_reset_entity` | string | **Optional** | The entity ID for a button to reset the water filter. |

## Assets

Images are generated via a build script into the `images/` directory of this repository. When installed via HACS, these images are automatically mapped and accessible at `/local/community/ha-smartthings-card/images/`.

## Development

1. Install dependencies: `npm install`
2. Build the project: `npm run build`
3. Watch for changes: `npm run build:watch`
