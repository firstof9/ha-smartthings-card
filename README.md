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
| entity | string | **Optional** | The entity ID to display. |
| name | string | **Optional** | Overrides the header title. |

## Development

1. Install dependencies: `npm install`
2. Build the project: `npm run build`
3. Watch for changes: `npm run build:watch`
