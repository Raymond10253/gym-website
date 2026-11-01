# Server configuration

Set `ADMIN_PASSWORD` in `Server/.env` to a strong, private password before starting the server. Do not put the password in the frontend or commit the `.env` file.

The admin login is available at `/admin`. Its server-issued session token expires after eight hours and is held only in server memory, so restarting the server signs out administrators. Admin-only booking and contact listing/deletion endpoints require this token; public submission endpoints remain available to the website forms.
