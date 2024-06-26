import IntlMessageFormat from 'intl-messageformat';
import {
  LocalizedStrings,
  HomeIntroProps,
  HomeWelcomeProps,
} from './index';
import { createTagFunctionWrapper } from './tag-functions';

const formatters = {} as Record<string, IntlMessageFormat>;

const wrapWithTagFunctions = createTagFunctionWrapper('es-US');

export const strings: LocalizedStrings = {
  locale: 'es-US',
  home: {
    title: 'Casa',
    welcome(props: HomeWelcomeProps) {
      return (
        formatters[ 'home.welcome' ] ?? (
          formatters[ 'home.welcome' ] = new IntlMessageFormat(
            [
              { type: 0, value: '¡Hola ' },
              { type: 1, value: 'firstName' },
              { type: 0, value: '!' }
            ],
            'es-US'
          )
        )
      ).format(wrapWithTagFunctions(props)) as string;
    },
    intro(props: HomeIntroProps) {
      return (
        formatters[ 'home.intro' ] ?? (
          formatters[ 'home.intro' ] = new IntlMessageFormat(
            [
              { type: 0, value: '¡Bienvenido de nuevo! Ha pasado ' },
              {
                type: 6,
                value: 'days',
                options: {
                  '=0': { value: [ { type: 0, value: 'solo un rato' } ] },
                  '=1': { value: [ { type: 0, value: 'solo un día' } ] },
                  other: {
                    value: [ { type: 1, value: 'days' }, { type: 0, value: ' días' } ]
                  }
                },
                offset: 0,
                pluralType: 'cardinal'
              },
              { type: 0, value: ' desde que estuviste aquí.' }
            ],
            'es-US'
          )
        )
      ).format(wrapWithTagFunctions(props)) as string;
    },
  },
  login: {
    title: 'Iniciar sesión',
    email: 'Correo',
    password: 'Contraseña',
    forgot: 'Olvido mi contraseña',
    submit: 'Vamos',
  },
};