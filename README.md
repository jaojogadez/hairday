# Hair Day - Agendamento de Serviços de Cabeleireiro

## Project Description

Hair Day é um projeto de agendamento de serviços de cabeleireiro que permite aos usuários selecionar uma data, horário e informar o nome do cliente para criar agendamentos. A aplicação exibe os agendamentos de acordo com o dia selecionado, divididos por período (manhã, tarde e noite).

[https://github.com/jaojogadez/hairday](https://github.com/jaojogadez/hairday)

## Features and Functionality

*   **Agendamento:** Permite aos usuários agendar um serviço, selecionando data, hora e informando o nome do cliente.
*   **Visualização de Agendamentos:** Exibe os agendamentos de acordo com o dia selecionado, divididos por períodos (manhã, tarde e noite).
*   **Cancelamento de Agendamentos:** Permite aos usuários cancelar um agendamento existente.
*   **Interface Responsiva:** A interface se adapta a diferentes tamanhos de tela.
*   **Validação de Dados:** Garante que os dados inseridos no formulário sejam válidos.
*   **Listagem Dinâmica de Horários:**  Carrega dinamicamente os horários disponíveis com base na data selecionada e nos agendamentos existentes. Horários passados são automaticamente desabilitados.
*   **Persistência de dados:** Os agendamentos são armazenados utilizando uma API (simulada no backend).

## Technology Stack

*   **Frontend:** HTML, CSS, JavaScript
*   **Styling:** CSS Modules
*   **Date Management:** Day.js
*   **API Calls:** Fetch API

## Prerequisites

Before running the application, ensure you have the following installed:

*   Node.js (v16 or higher)
*   A package manager such as npm or yarn.  (npm is included with Node.js)
*   A backend server running (The project assumes a server running on `http://localhost:3333` which handles the scheduling data).  This backend is not included in the repository and must be setup separately.

## Installation Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/jaojogadez/hairday.git
    cd hairday
    ```

2.  **Install dependencies:**

    It is assumed that the `dist` folder contains the compiled/bundled code. Therefore, you may not need to install dependencies directly within this project if you only intend to serve the pre-built files. However, if you want to modify and rebuild the frontend, you'll need the dependencies:

    ```bash
    #Example using npm
    npm install

    #Or example using yarn (if you prefer yarn)
    yarn install
    ```

3.  **Build the project (if modifications are needed):**

    The project uses webpack (though it is not explicitly configured within the provided code). If you've modified source files, you'll need to bundle the application.  You'll need to configure Webpack accordingly to build the `src` files into the `dist` folder.

    ```bash
    # Example assuming you have webpack set up with a build script in package.json
    npm run build  # or yarn build
    ```

## Usage Guide

1.  **Open `index.html` in your browser:**  The main entry point is `index.html`, or serve it using a local web server.

    ```bash
    # Example using Python's SimpleHTTPServer (Python 2)
    python -m SimpleHTTPServer 8000

    # Example using Python's http.server (Python 3)
    python3 -m http.server 8000

    #Open your browser and navigate to http://localhost:8000
    ```

2.  **Using the Application:**

    *   Select a date using the date picker. The date is displayed in the header of the schedule. The date is formated using `dayjs` in `src/modules/schedules/load-date.js` and the format displayed is `DD/MM/YY`.
    *   Choose an available time slot from the list of hours. Click on a time to select it. The selection is handled by the `hoursClick` function located in `src/modules/form/hours-click.js`.
    *   Enter the client's name in the input field.
    *   Click the "Agendar" button to schedule the appointment.  The form submission is handled by the function in `src/modules/form/submit.js`.
    *   View the scheduled appointments on the right-hand side under the "Agendamentos" section. Appointments are grouped by time of day (Manhã, Tarde, Noite).
    *   To cancel an appointment, click the cancel icon next to the appointment.  The cancel functionality is found in `src/modules/schedules/cancel.js`.

## API Documentation

The application interacts with a backend API to manage appointments. The API endpoints used are:

*   **GET `/schedules`**: Fetches all schedules. Used in `src/services/schedule-fetch-by-day.js` to retrieve appointments for a specific date.
*   **POST `/schedules`**: Creates a new schedule. Used in `src/services/schedule-new.js` to add new appointments. The request body should be a JSON object with the following properties:

    ```json
    {
        "id": "unique_id",
        "name": "Client Name",
        "when": "ISO 8601 Date String"
    }
    ```

*   **DELETE `/schedules/:id`**: Cancels a schedule with the given ID. Used in `src/services/schedule-cancel.js` to delete existing appointments.

The base URL for the API is defined in `src/services/api-config.js`:

```javascript
export const apiConfig = {
    baseURL: "http://localhost:3333",
}
```

## Contributing Guidelines

Contributions are welcome! To contribute to Hair Day, please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Test your changes thoroughly.
5.  Submit a pull request with a clear explanation of your changes.

## License Information

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact/Support Information

For questions or support, please contact [jaojogadez](https://github.com/jaojogadez).