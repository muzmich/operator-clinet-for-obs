# OBS-client-operator

This is mvp setup for casting messages from one page to another.

## Setup guide:
      
    $ npm i
    $ npm run watch

This will create server, [localhost:3000](localhost:3000) with client page, and [localhost:3000/operator.html](localhost:3000/operator.html) with operator page.

## OBS connect

- Add new source (Browser) with client page localhost:3000

- Press buttons on operator page to send data on stream.

- To be able to receive sound from client page, make sure to check "Control audio via OBS" in properties of `Browser source`
