# AVR HRMS & Field Management Portal

A lightweight, high-performance **Human Resource Management System (HRMS)** and **Field Operations Tracker** designed for managing educational institutions, faculty coordinators, freelance trainers, daily attendance, class logs, expense reimbursements, and salary settlements.

Built with **HTML5**, **CSS3**, **Vanilla JavaScript**, and backed by **Supabase (PostgreSQL + Row-Level Security)**.

---

## 🛠️ Key Features

### 🔐 1. Authentication & Security

* **Unified Login Portal**
  Role-based access control automatically routes users to their respective dashboards:

  * Admin
  * Faculty / Coordinator
  * Employee / Trainer

* **Account EMS Status Toggle**
  Administrators can instantly activate or deactivate accounts using the `is_active` flag.

  Deactivated users are prevented from logging in while their historical attendance, training logs, payout records, and audit trails remain intact.

* **Row-Level Security (RLS)**
  Supabase Row-Level Security policies help ensure secure database reads and writes based on user access levels.

---

### 🏢 2. Executive Admin Dashboard

#### Real-Time Business Analytics

Provides a high-level overview of:

* Registered colleges
* Active class sections
* Active faculty / coordinators
* Provisioned employees and trainers

#### Financial Commitments Overview

Live financial calculations for:

* Monthly gross pay
* Quarterly gross pay
* Yearly gross pay
* Total reimbursed expenses
* Pending payout approvals
* Total disbursed cash

#### Interactive Visualizations

Integrated **Chart.js** visualizations provide insights into:

* Base pay vs. travel and food expenses
* Employee and trainer employment-type distribution
* Financial trends and operational metrics

---

### 👥 3. Employee & Trainer Directory Management

#### Account Provisioning

Create and manage employee accounts with configurable employment types:

| Employment Type | Description                                      |
| --------------- | ------------------------------------------------ |
| Freelance       | Trainer paid based on assigned work / daily rate |
| Fixed Salary    | Employee receiving a fixed monthly salary        |
| Intern          | Intern or stipend-based employee                 |

#### Dynamic Expense Permissions

Administrators can independently enable or disable:

* Travel expense claims
* Food expense claims

Permissions are configurable for each employee or trainer.

#### Profile Editing

Administrators can update:

* Contact number
* Base pay rate
* Employment type
* Travel expense privileges
* Food expense privileges
* Passphrase / password
* Account activation status

---

### 🏫 4. College & Section Mapping

Centralized directory management for:

* Colleges
* Departments
* Academic years

  * 1st Year
  * 2nd Year
  * 3rd Year
  * 4th Year
* Sections
* Faculty / coordinator assignments

These mappings are used throughout attendance and daily training-session logs.

---

### 📊 5. Field Auditing & Running Advance Ledger

#### Detailed Trainer Inspection

Administrators can inspect individual trainer activity including:

* Daily attendance
* Training session logs
* Topics covered
* Day type
* Base pay
* Travel expenses
* Food expenses
* Approval status

Logs can be filtered using custom date ranges.

#### Running Advance / Loan Balance Tracker

The system automatically calculates advance payments made beyond cleared employee earnings.

```text
Advance Received = Total Cash Disbursed - Total Cleared Earnings
```

This provides administrators with a running balance showing whether an employee or trainer has received an advance against future earnings.

#### Salary Settlement

The settlement workflow allows administrators to:

1. Review pending trainer logs.
2. Calculate outstanding base pay.
3. Calculate approved travel and food expenses.
4. Review existing advances.
5. Approve eligible logs.
6. Record the final payout.
7. Select the transaction method.
8. Store transaction reference information.

Supported transaction modes include:

* UPI
* Bank Transfer
* Cash

Every settlement is recorded in the financial ledger for auditing.

---

### 📈 6. Audit Logs & CSV Export

#### Payout Transaction Logs

The dedicated:

```text
payoutboard.html
```

provides a complete payout history with:

* Employee filters
* Custom date filters
* Transaction details
* Payment methods
* Reference notes
* CSV report export

#### Attendance & Session Log Export

Filtered trainer attendance and training-session records can be exported directly to **CSV** for:

* Month-end reconciliation
* Payroll verification
* Expense auditing
* Management reporting
* Accounting records

---

# 🗄️ Database Architecture

The application uses **Supabase / PostgreSQL** as its backend.

The system relies on six primary database tables.

| Table                     | Purpose                                                               |
| ------------------------- | --------------------------------------------------------------------- |
| `users`                   | User identities, roles, compensation, permissions, and account status |
| `college_sections`        | College, department, academic year, and section mapping               |
| `coordinator_assignments` | Maps faculty/coordinators to college sections                         |
| `attendance_logs`         | Daily attendance records                                              |
| `tracker_logs`            | Training sessions, topics, pay, expenses, and approvals               |
| `payout_records`          | Salary settlements, payouts, and advance-payment ledger               |

---

## Database Tables

### `users`

Stores:

* Username
* Password / authentication information
* Phone number
* Role
* Employment type
* Default compensation rate
* Travel expense permission
* Food expense permission
* Account activation status
* Account approval status
* Creation timestamp

Supported roles:

```text
admin
faculty
coordinator
employee
user
```

---

### `college_sections`

Maintains the institutional structure used by the field-management system.

Typical information includes:

```text
College
Department
Academic Year
Section
```

---

### `coordinator_assignments`

Links faculty members and coordinators with their assigned college sections.

This allows the system to determine which coordinators are responsible for specific academic groups.

---

### `attendance_logs`

Stores quick daily attendance records for trainers and employees.

These records can later be used for:

* Attendance verification
* Payroll reconciliation
* Field auditing

---

### `tracker_logs`

Stores end-of-day trainer activity including:

* College
* Department
* Academic year
* Section
* Topic coverage
* Day type
* Base pay
* Travel expense
* Food expense
* Approval status

Supported day types include:

```text
Full Day
Half Day
Canceled
```

---

### `payout_records`

Acts as the financial audit ledger.

Stores information related to:

* Salary settlements
* Trainer payouts
* Advance payments
* Payment methods
* Transaction references
* Settlement history

---

# 🚀 Getting Started

## Prerequisites

Before running the project, ensure you have:

* A modern web browser:

  * Google Chrome
  * Microsoft Edge
  * Mozilla Firefox
  * Safari
* A Supabase account
* PostgreSQL database access through Supabase
* A code editor such as Visual Studio Code
* Optional local HTTP server such as the VS Code **Live Server** extension

---

# 📁 Project Structure

```text
AVR-HRMS/
│
├── index.html
│   # Central Unified Login Portal
│
├── Indexheader.html
│   # Public Header Template
│
├── Indexfooter.html
│   # Public Footer Template
│
├── static/
│   │
│   ├── css/
│   │   └── styles.css
│   │       # Master Design System & Color Variables
│   │
│   └── js/
│       └── config.js
│           # Supabase Client Configuration
│
├── Admin/
│   │
│   ├── Adminhome.html
│   │   # Owner / Admin Executive Dashboard
│   │
│   ├── employeeboard.html
│   │   # Employee Provisioning, Privileges & Audit View
│   │
│   ├── employemanagementeboard.html
│   │   # EMS Activation / Deactivation Directory
│   │
│   ├── collegeboard.html
│   │   # College & Section Management
│   │
│   ├── payoutboard.html
│   │   # Payout Transaction Audit Logs & CSV Export
│   │
│   ├── Adminheader.html
│   │   # Dynamic Admin Navigation Header
│   │
│   └── Adminfooter.html
│       # Dynamic Admin Layout Footer
│
├── Faculty/
│   │
│   └── Facultyhome.html
│       # Faculty & Coordinator Session Portal
│
└── Employee/
    │
    └── Employeehome.html
        # Employee / Trainer Daily Log Submission Portal
```

---

# 💻 Tech Stack

| Technology         | Usage                                         |
| ------------------ | --------------------------------------------- |
| HTML5              | Application structure and interfaces          |
| CSS3               | Styling, CSS Variables, Flexbox, and CSS Grid |
| JavaScript ES6+    | Frontend application logic                    |
| Supabase           | Backend-as-a-Service                          |
| PostgreSQL         | Relational database                           |
| Row-Level Security | Database access control                       |
| Chart.js v4        | Dashboard analytics and visualizations        |
| Google Fonts       | Application typography                        |

### Typography

The interface uses:

* **Fraunces**
* **Inter**
* **IBM Plex Mono**

---

# 🔐 Security

The application is designed around several security controls:

* Role-based access control
* Supabase Row-Level Security
* Account activation / deactivation
* User approval status
* Granular expense permissions
* Financial audit trails
* Payout transaction history

For production deployments, additional security measures are recommended:

* Use Supabase Auth for authentication
* Never store plaintext passwords
* Never expose `service_role` keys
* Configure strict RLS policies
* Validate financial transactions server-side
* Restrict administrative database operations
* Rotate compromised credentials immediately

---

# 📊 Core Workflow

```text
User Login
    │
    ├── Admin
    │     │
    │     ├── Manage Employees
    │     ├── Manage Colleges
    │     ├── Manage Sections
    │     ├── Review Attendance
    │     ├── Review Trainer Logs
    │     ├── Approve Expenses
    │     ├── Process Settlements
    │     └── Export Reports
    │
    ├── Faculty / Coordinator
    │     │
    │     ├── View Assigned Sections
    │     └── Manage Field Sessions
    │
    └── Employee / Trainer
          │
          ├── Submit Attendance
          ├── Submit Daily Session Log
          ├── Record Topic Coverage
          ├── Submit Travel Expense
          └── Submit Food Expense
```

---

# 💰 Financial Workflow

```text
Trainer Completes Session
        │
        ▼
Attendance / Tracker Log Created
        │
        ▼
Base Pay Calculated
        │
        ├── Travel Expense
        │
        └── Food Expense
        │
        ▼
Admin Reviews Log
        │
        ▼
Log Approved
        │
        ▼
Settlement Calculation
        │
        ├── Cleared Earnings
        ├── Previous Advances
        └── Pending Expenses
        │
        ▼
Payment Disbursed
        │
        ├── UPI
        ├── Bank Transfer
        └── Cash
        │
        ▼
Payout Record Created
        │
        ▼
Financial Audit Ledger Updated
```

---

# 🧮 Advance Balance Calculation

The running advance balance is calculated using:

```text
Advance Received = Total Cash Disbursed - Total Cleared Earnings
```

### Example

If a trainer has:

```text
Total Cleared Earnings : ₹20,000
Total Cash Disbursed   : ₹25,000
```

then:

```text
Advance Received = ₹25,000 - ₹20,000
                 = ₹5,000
```

The trainer therefore has a running advance balance of:

```text
₹5,000
```

---

# 📄 Reporting

The system supports CSV-based reporting for:

* Attendance logs
* Training session logs
* Employee activity
* Expense claims
* Salary settlements
* Payout history

These reports can be used for:

* Payroll processing
* Month-end accounting
* Expense reconciliation
* Internal auditing
* Management reporting

---

# 🔮 Future Enhancements

Potential future improvements include:

* Supabase Auth integration
* Password reset workflow
* Automated monthly payroll
* PDF payslip generation
* Email payout notifications
* WhatsApp notifications
* Employee document management
* GPS-based field attendance
* Attendance geofencing
* Mobile-responsive trainer dashboard
* Advanced financial analytics
* Automated monthly reports
* Multi-branch / multi-organization support

---

# 📄 License

**Private / Proprietary Software**

Developed for **AVR R&D**.

All rights reserved.

Unauthorized copying, modification, distribution, publication, or commercial use of this software or its source code is prohibited without prior authorization.

---

## AVR HRMS & Field Management Portal

**Human Resources • Field Operations • Training Management • Expense Tracking • Payroll & Settlements**

Built for streamlined management of educational training operations.
