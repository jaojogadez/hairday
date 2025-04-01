# 💇‍♀️ Hair Day - Sistema de Agendamento para Salões de Beleza

## 📝 Descrição do Projeto

O **Hair Day** é uma solução completa para agendamento de serviços em salões de beleza e barbearias. Com uma interface intuitiva e moderna, nossa aplicação permite que profissionais gerenciem seus horários de forma eficiente, oferecendo aos clientes uma experiência de agendamento simplificada.

Desenvolvido pensando nas necessidades do mercado brasileiro de beleza, o Hair Day organiza os agendamentos por períodos do dia, facilitando a visualização e organização da agenda.

**Repositório:** [github.com/jaojogadez/hairday](https://github.com/jaojogadez/hairday)

## ✨ Funcionalidades Principais

* **📅 Agendamento Simplificado:** Selecione data, horário e adicione o nome do cliente com poucos cliques
* **👁️ Visualização Organizada:** Veja agendamentos separados por período (manhã, tarde e noite)
* **❌ Cancelamento Facilitado:** Cancele agendamentos com apenas um clique
* **📱 Design Responsivo:** Interface adaptável para todos os dispositivos - desktop, tablet e celular
* **✅ Validação Inteligente:** Sistema previne erros de agendamento e dados inválidos
* **⏰ Horários Dinâmicos:** Horários já ocupados ou no passado são automaticamente bloqueados
* **🔄 Sincronização em Tempo Real:** Todos os dados são armazenados e sincronizados via API

## 🛠️ Tecnologias Utilizadas

* **Frontend:** HTML5, CSS3, JavaScript ES6+
* **Estilização:** CSS Modules para estilos isolados e reutilizáveis 
* **Gerenciamento de Datas:** Day.js (leve e eficiente)
* **Comunicação com Backend:** Fetch API nativa

## 📋 Pré-requisitos

Antes de iniciar o projeto, você precisará ter instalado:

* Node.js (versão 16 ou superior)
* Gerenciador de pacotes npm (incluído no Node.js) ou yarn
* Servidor backend rodando (o projeto está configurado para se conectar a um servidor em `http://localhost:3333`)

## 🚀 Instalação Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/jaojogadez/hairday.git
   cd hairday
   ```

2. **Instale as dependências:**

   A pasta `dist` já contém o código compilado pronto para uso. Se precisar apenas rodar a aplicação, pode pular para o passo de uso. Para desenvolvimento:

   ```bash
   # Usando npm
   npm install

   # Ou usando yarn
   yarn install
   ```

3. **Compile o projeto (caso faça modificações):**

   Se você fez alterações no código fonte, será necessário compilar novamente o projeto:

   ```bash
   # Assumindo que há um script de build configurado no package.json
   npm run build  # ou yarn build
   ```

## 📱 Como Usar

1. **Abra o arquivo `index.html` no navegador ou use um servidor local:**

   ```bash
   # Exemplo usando Python 3
   python3 -m http.server 8000

   # Acesse no navegador: http://localhost:8000
   ```

2. **Utilizando a aplicação:**

   * Selecione uma data no calendário (formato DD/MM/YY)
   * Escolha um horário disponível na lista
   * Digite o nome do cliente no campo indicado
   * Clique em "Agendar" para confirmar
   * Visualize todos os agendamentos do dia na seção à direita
   * Para cancelar um agendamento, clique no ícone de cancelamento ao lado

## 🔌 Documentação da API

A aplicação se comunica com uma API backend para gerenciar os agendamentos:

* **GET `/schedules`**: Busca todos os agendamentos
* **POST `/schedules`**: Cria um novo agendamento com a estrutura:

  ```json
  {
      "id": "id_unico",
      "name": "Nome do Cliente",
      "when": "Data em formato ISO 8601"
  }
  ```

* **DELETE `/schedules/:id`**: Cancela um agendamento pelo ID

A URL base da API está configurada em `src/services/api-config.js` como `http://localhost:3333`.

## 🤝 Como Contribuir

Adoraríamos sua contribuição para o Hair Day! Aqui está como você pode ajudar:

1. Faça um fork do repositório
2. Crie uma branch para sua funcionalidade (`git checkout -b minha-nova-funcionalidade`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Envie para o GitHub (`git push origin minha-nova-funcionalidade`)
5. Abra um Pull Request detalhando suas alterações

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte e Contato

Está com dúvidas ou sugestões? Entre em contato com o desenvolvedor:

* GitHub: [jaojogadez](https://github.com/jaojogadez)
* Entre em contato através das Issues do repositório

---

💈 **Hair Day** - Transformando a gestão de agendamentos para profissionais de beleza no Brasil.
