import { FC, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

import { AnimatePresence } from 'framer-motion';

import * as S from './styles';

type Props = {
  Fallback: FC;
};

const Lgpd = ({ Fallback }: Props) => {
  const [cookies, setCookie] = useCookies(['lgpd']);
  const [lgpd, setLgpd] = useState<string | null>(null);

  useEffect(() => {
    if (cookies && cookies.lgpd) setLgpd(cookies.lgpd);
  }, [cookies, lgpd]);

  const EditCookies = (option: string) => {
    const d = new Date();
    d.setTime(d.getTime() + 31556952000); //1ano

    setCookie('lgpd', option, { path: '/', expires: d });

    setLgpd(option as string);
  };

  return (
    <AnimatePresence>
      {lgpd ? (
        <Fallback />
      ) : (
        <S.Fixed
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <S.Bg />
          <div>
            <h1>CONTROLE SUA PRIVACIDADE</h1>
            <div>Nosso site usa cookie para melhorar a navegação.</div>
          </div>
          <S.ButtonWrapper>
            <S.Btn onClick={() => EditCookies('reject')}>Rejeitar</S.Btn>
            <S.Btn
              className="text-sm font-light"
              onClick={() => EditCookies('accept')}
            >
              Aceitar
            </S.Btn>
          </S.ButtonWrapper>
        </S.Fixed>
      )}
    </AnimatePresence>
  );
};

export default Lgpd;
