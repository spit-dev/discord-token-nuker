// DISCORD TOKEN NUKER
const { Color } = require('./src/dsg');
const { User } = require('./src/usr');
const Readline = require('readline').createInterface(
  { input: process.stdin, output: process.stdout }
);

const init = () => {
  console.clear();
  console.log(Color.banner);

  process.stdout.write(
    String.fromCharCode(27) + "]0;" + 'Nuker !' + String.fromCharCode(7)
  );

  Color.options.forEach(
    option => {
      Color.log(option, Color.options.indexOf(option) + 1);
    }
  );

  Readline.question(Color.list[1].code + '# OPCION > ', option => {
    if (!['1', '2'].includes(option)) return init();

    Readline.question(Color.list[1].code + '  Token > ', token => {
      const user = new User(
        { token: token }
      );

      if (option == '1') {
        Color.log('Nukeando token...');

        user.nuke().catch(
          (e) => {
            Color.log(e);

            setTimeout(() => {
              init();
            }, 1000);
          }
        );
      } else if (option == '2') {
        user.info().then(
          data => {
            console.clear();
            console.log(Color.banner);

            data.forEach((d) => Color.log(d));
            setTimeout(process.exit, 60000);
          }
        ).catch(
          (e) => {
            Color.log(e);

            setTimeout(() => {
              init();
            }, 1000);
          }
        );
      };
    });
  });
};

init();
