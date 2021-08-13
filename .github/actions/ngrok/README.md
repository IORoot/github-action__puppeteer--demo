# Custom NGROK action

Original: luchihoratiu/debug-via-ssh@main

## Changes
Allows for a second connection for web traffic.

```yaml
  NGROK_REGION_ALT:
    description: 'Region for second ngrok session'
    required: false
    default: 'us'
  NGROK_PORT:
    description: 'Port to open - defaults to 80'
    required: false
    default: '80'
  NGROK_PROTO:
    description: 'Protocol to use - defaults to HTTP'
    required: false
    default: 'http'
```

This can be any protocol / port, but the region has to be different if on a free NGROK plan.