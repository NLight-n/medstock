# MedStock

MedStock is a web application designed to help hospitals and clinics manage their medical inventory and usage. It is especially useful for departments like Interventional Radiology, where tracking materials, usage, and documents is important.

## What Can MedStock Do?

- **Inventory Management:**
  - Add, edit, and track all medical materials and their batches (like stents, catheters, etc.).
  - See current stock, low stock alerts, and items that are expiring soon.

- **Usage Tracking:**
  - Record which materials were used for each patient and procedure.
  - See a history of all usage, grouped by patient, procedure, and date.

- **Document Management:**
  - Upload and manage important documents (invoices, delivery challans, purchase orders) for each batch.
  - Download and preview documents securely.

- **User Management & Permissions:**
  - Only authorized users can make changes.
  - Admins can add or remove users and set what each user is allowed to do.

- **Backup & Restore:**
  - Easily create backups of all your data.
  - Restore from a backup if needed.

- **Analytics & Reports:**
  - View charts and reports on inventory, usage trends, and more.
  - Export data to PDF or Excel for sharing or record-keeping.

- **Audit Log:**
  - Every change is logged, so you can see who did what and when.

## How to Set Up MedStock

1. **Install Requirements:**
   - You need Docker Desktop installed on your computer (for database and storage).
   - You need a modern web browser (like Chrome or Edge).

2. **Prepare Your Project Folder:**
   - **Clone the MedStock app files and folders from Github.**
   - **Create a `.env` file** in the root folder (see example below).

        ```
        # PostgreSQL
        POSTGRES_DB=dbname
        POSTGRES_USER=dbuser
        POSTGRES_PASSWORD=dbpass

        # pgAdmin
        PGADMIN_DEFAULT_EMAIL=admin@example.com
        PGADMIN_DEFAULT_PASSWORD=admin123

        # MinIO
        MINIO_ROOT_USER=admin
        MINIO_ROOT_PASSWORD=admin123
        MINIO_ENABLED=true
        MINIO_ENDPOINT=http://minio:9000
        MINIO_PORT=9000
        MINIO_BUCKET=medstock
        MINIO_USE_SSL=false

        # NextJS-Webapp
        DATABASE_URL="postgresql://dbuser:dbpass@postgres:5432/medstock?schema=public"
        NODE_ENV=production
        PG_BACKUP_PASSWORD=dbpass
        BACKUP_DIR=/backups

        NEXTAUTH_URL=http://localhost:3000
        NEXTAUTH_SECRET=Generate secret key and copy here
        ```

3. **Start the App:**
   - Open a terminal (Command Prompt or PowerShell).
   - Go to the Medstock folder.
   - Run: `docker compose up -d --build` (this starts the database and storage services).


4. **Open MedStock:**
   - Go to [http://localhost:3000](http://localhost:3000) in your browser.
   - The first time, you will see a setup page to create your admin account.

5. **Start Using MedStock:**
   - Add your materials, vendors, and documents.
   - Record usage as you go.
   - Invite other users if needed.

## Need Help?
- If you have any questions, ask your IT team or the person who set up MedStock.
- For technical issues, check the documentation or contact support.

## minIO Backup & Restore (Docker setup)
1. **Backup**
   - docker run --rm -v minio_data:/data -v $(pwd):/backup alpine tar czf /backup/minio_backup.tar.gz -C /data .
2. **Restore**
   - docker run --rm -v minio_data:/data -v $(pwd):/backup alpine tar xzf /backup/minio_backup.tar.gz -C /data

---

MedStock makes medical inventory and usage tracking easy, safe, and reliable for your team.
