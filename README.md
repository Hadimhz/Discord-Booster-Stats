# Nitro Boosters

This allows your to check how many time a user boosted your server, feel free to use that in your code.

## Note:
- This might be considered self-botting which is against Discord's Terms of service, this might seem harmless but  nonetheless use at your own risk

## Setup:
- Clone the repo.
- configure the application (config.json)
- run the app! `node index.js`

## Config:

### token:
<br>

This field is for your Discord **User** token, a bot token simply won't work.
> *note:* The user must have administrator access.

### interval: 
<br>

Interval between each API check.<br>
To avoid getting [Rate-Limitted](https://en.wikipedia.org/wiki/Rate_limiting) the app will check discord's API every X amount of milliseconds, I have found 10000ms (10s) to work perfectly. 

### guildID:
<br>

Guild ID which the app will be checking.
> *note:* The use account in use must have administrator permission.


### API.port
<br>

The port which the app will be listening on.

### API.password
<br>

The password that will keep the API protected, this will keep any unwated users from using it.
This Field is optional, simple set this to `""` and that feature will be disabled.
