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

| Name | Type | Requirement | Description |
| --- | --- | --- | --- |
| type | string | **Required** | `custom:smartthings-card` |
| appliance_type | string | **Optional** | `microwave`, `oven`, `dishwasher`, `washer`. Defaults to `microwave`. |
| power_entity | string | **Optional** | The entity ID for power state. |
| mode_entity | string | **Required** | The entity ID for the current mode. |
| time_entity | string | **Optional** | The entity ID for time remaining. |
| name | string | **Optional** | Overrides the header title. |

## Assets

Deposit your appliance-specific images in the `images/` directory of this repository:

- `images/<appliance_type>/bg.png`: The background image for the appliance.
- `images/<appliance_type>/off.png`: The default "off" or "idle" icon.
- `images/<appliance_type>/<mode>.png`: Icon for a specific mode (e.g., `bake.png`).

When installed via HACS, these images are accessible at `/local/community/ha-smartthings-card/images/`.

## Development

1. Install dependencies: `npm install`
2. Build the project: `npm run build`
3. Watch for changes: `npm run build:watch`
