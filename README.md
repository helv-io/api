# api

## Inspired by the defunct api.xteam.xyz endpoint

![Build Status]

## Endpoints

The endpoints listed below are part of this api.

## /attp

Generates an animated 512x512 `format` [ gif | webp| base64 ] with the text in the `text` querystring parameter, as such:

### https://api.helv.io/attp?text=Hello%20World.%20How%20are%20you%20today?&format=gif

![attp]

## /ttp

Generates a static, black&white `format` [ gif | webp| base64 ] with the text in the `text` querystring parameter, as such:

### https://api.helv.io/ttp?text=Hello%20World.%20How%20are%20you%20today?

![ttp]

## /otp

Generates a One Time Password, with the secret in the `secret` querystring parameter, as such:

### https://api.helv.io/otp?secret=GRWXHSMFDUQTBMTX

`123456`

[Build Status]: https://jenkins.helv.io/buildStatus/icon?job=helvio%2Fapi
[attp]: https://api.helv.io/attp?text=Hello%20World.%20How%20are%20you%20today??&format=gif
[ttp]: https://api.helv.io/ttp?text=Hello%20World.%20How%20are%20you%20today?
