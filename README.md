# api
## Inspired by the defunct api.xteam.xyz endpoint
![Build Status]

## Endpoints
The endpoints listed below are part of this api.

## /attp
Generates an animated 512x512 GIF with the text in the `text` querystring parameter, as such:

### https://api.helv.io/attp?text=Hello%20World.%20How%20are%20you%20today?
![attp]

## /ttp
Generates a static, black&white 512x512 GIF with the text in the `text` querystring parameter, as such:

### https://api.helv.io/ttp?text=Hello%20World.%20How%20are%20you%20today?
![ttp]

[Build Status]: https://jenkins.helv.io/buildStatus/icon?job=helvio%2Fapi
[attp]: https://api.helv.io/attp?text=Hello%20World.%20How%20are%20you%20today?
[ttp]: https://api.helv.io/ttp?text=Hello%20World.%20How%20are%20you%20today?