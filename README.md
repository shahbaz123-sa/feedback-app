# feedback-app
This repo is related to my feedback project

## Database Setup

1. Before running migrations, make sure you have a MySQL server installed and running.
2. Create a new database named `feedback_db`.
3. In the `.env` file located at `feedback-app`, update the following variables to match your MySQL database credentials:

    ```plaintext
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=feedback_db
    DB_USERNAME=AdMiN
    DB_PASSWORD=RIA_NV8!.cvTZg1k
    ```

4. Make sure to create the database `feedback_db` before running migrations.

## Application Setup

1. Place the application's folder (named feedback-app) inside the xampp\htdocs directory.
2. Start the Apache server.
3. Navigate to the application directory in your terminal.
4. Run the command php artisan serve.
5. Open your web browser and go to http://127.0.0.1:8000/#/.
