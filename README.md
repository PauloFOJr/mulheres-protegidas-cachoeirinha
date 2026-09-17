# 🛡️ Mulheres Protegidas

Site de conscientização e enfrentamento à violência doméstica, desenvolvido como atividade de extensão universitária do curso de **Análise e Desenvolvimento de Sistemas** (UNIASSELVI), em parceria com a **Guarda Municipal de Cachoeirinha/RS**, por meio do **Grupamento Mulheres Protegidas**.

> "Você não está sozinha. Violência contra a mulher é crime. Denuncie. Peça ajuda."

## 📖 Sobre o projeto

Este projeto tem como objetivo disponibilizar uma solução colaborativa para a conscientização e o combate à violência doméstica, alinhada ao Objetivo de Desenvolvimento Sustentável (ODS) 16 — Paz, Justiça e Instituições Eficazes. O site busca:

- Apoiar campanhas de sensibilização da sociedade sobre o combate à violência doméstica;
- Informar a comunidade sobre as leis de proteção às vítimas e seus direitos;
- Encorajar vítimas e testemunhas a denunciar de forma segura e confidencial, divulgando os canais oficiais de apoio.

## ✨ Funcionalidades

- Apresentação dos **6 tipos de violência** contra a mulher (física, psicológica, moral, patrimonial, sexual e vicária), com exemplos práticos;
- Seção de **legislação**, com links para o texto integral das leis (Lei Maria da Penha, Lei do Feminicídio, entre outras);
- **Canais oficiais de denúncia** sempre visíveis (Ligue 180, Ligue 153 — Guarda Municipal, Ligue 190 — Brigada Militar);
- Botão de **saída rápida** (\"Sair rápido\"), inclusive acionável pressionando a tecla `ESC` três vezes, para a segurança de quem está navegando;
- Controles de **acessibilidade** para aumentar/diminuir o tamanho do texto;
- **Formulário de contato** com validação de campos (não conectado a e-mail ou serviço externo — ver [Aviso importante](#-aviso-importante));
- Layout **responsivo**, testado em desktop e celular;
- Página única, sem dependências externas — pronta para hospedagem gratuita via GitHub Pages.

## 🛠️ Tecnologias utilizadas

- HTML5, CSS3 e JavaScript puro (sem frameworks ou bibliotecas externas);
- Ícones em SVG inline;
- Hospedagem estática via **GitHub Pages**.

## 📁 Estrutura do repositório

```
├── index.html        # Estrutura HTML do site
├── css/
│   └── style.css     # Estilos (cores, layout, responsividade)
├── js/
│   └── script.js     # Interatividade (menu, acessibilidade, saída rápida, formulário)
└── README.md
```

## 🚀 Como executar localmente

Como o site é 100% estático, basta abrir o arquivo diretamente no navegador:

```bash
git clone https://github.com/<seu-usuario>/<seu-repositorio>.git
cd <seu-repositorio>
```

Depois é só abrir o `index.html` no navegador, ou usar um servidor local simples:

```bash
python3 -m http.server 8000
# acesse http://localhost:8000
```

## 🌐 Publicando com GitHub Pages

1. Acesse **Settings > Pages** no repositório;
2. Em **Source**, selecione a branch `main` e a pasta `/root`;
3. Salve — o GitHub Pages publicará o site em poucos minutos em `https://<seu-usuario>.github.io/<seu-repositorio>/`.

## ⚠️ Aviso importante

Este é um **projeto acadêmico**, desenvolvido como atividade de extensão universitária. O formulário de contato do site é apenas uma demonstração de front-end: ele valida os campos e exibe uma confirmação visual, mas **não envia dados para nenhum servidor, e-mail ou serviço externo**. Para contato real ou denúncias, utilize sempre os canais oficiais:

- **Ligue 180** — Central de Atendimento à Mulher (nacional, 24h)
- **Ligue 153** — Guarda Municipal de Cachoeirinha / Grupamento Mulheres Protegidas
- **Ligue 190** — Brigada Militar (emergência)

## 🎓 Sobre a atividade de extensão

| | |
|---|---|
| **Instituição de ensino** | Centro Universitário Leonardo da Vinci — UNIASSELVI |
| **Curso** | Análise e Desenvolvimento de Sistemas |
| **Instituição parceira** | Guarda Municipal de Cachoeirinha/RS — Grupamento Mulheres Protegidas |
| **Carga horária** | 149 horas |
| **ODS vinculado** | 16 — Paz, Justiça e Instituições Eficazes |

## 👤 Autor

**Paulo Jr**
E-mail: junior.pfo@gmail.com

## 📄 Licença

Projeto acadêmico de uso educacional. O conteúdo informativo sobre violência doméstica tem como base a legislação brasileira vigente e materiais públicos de campanha da Guarda Municipal de Cachoeirinha. Consulte a instituição parceira antes de qualquer publicação oficial ou uso institucional deste material.
