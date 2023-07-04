# ControlAir

Projeto de Sistemas Distribuídos da Universidade Federal de Itajubá (UNIFEI). Este é o repositório para um aplicativo de controle de ar-condicionado desenvolvido em React Native. O objetivo do aplicativo é permitir que os usuários controlem os aparelhos de ar-condicionado de forma remota por meio de APIs. As informações atualizadas são recebidas do servidor WebSocket e exibidas no aplicativo.

## Funcionalidades
- Adicionar cômodos e ar-condicionados novos
- Exibir a temperatura atual do ar-condicionado.
- Exibir a temperatura atual do quarto, captada por um sensor.
- Permitir ao usuário ajustar a temperatura desejada.
- Atualizar automaticamente as informações exibidas com base nas atualizações do servidor WebSocket.

## Configuração
Siga estas etapas para configurar e executar o aplicativo:

1) Clone este repositório em seu ambiente de desenvolvimento local.
```sh
https://github.com/kcami/ControlAir.git
```
2) Acesse o diretório do projeto.
3) Instale as dependências do projeto.
4) Configure o servidor WebSocket que fornecerá as atualizações para o aplicativo.

Abra o arquivo src/hooks/useRoom.tsx, src/hooks/useRooms.tsx e src/components/Header.tsx e redefina a URL do servidor WebSocket.

## Telas

<image width="220" src="https://github.com/kcami/ControlAir/assets/50055369/301bf54d-1a54-4d68-9de6-42e435b5786e"></image>
<image width="220" src="https://github.com/kcami/ControlAir/assets/50055369/8fea27cc-33e5-4fab-9b16-f3f67bed4bff"></image>
<image width="220" src="https://github.com/kcami/ControlAir/assets/50055369/57ca48a5-854c-4715-967c-7a84dd07ae48"></image>
