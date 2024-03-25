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

1. Place the application's folder (named `feedback-app`) inside `xampp\htdocs`.
2. Run Apache server.
3. Open `http://127.0.0.1:8000/#/` in your browser.
