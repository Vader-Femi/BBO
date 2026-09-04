const bankModules = [
    {
        id: "mod1",
        title: "Module 1: The Business of Banking",
        isCaseStudy: false,
        questions: [
            {
                q: `Q1: What are three services that a deposit bank renders to the customer?`,
                a: `<strong>A:</strong> The manual lists several services you can choose from:<br><ul><li>Mobilization of savings.</li><li>Extension of credit facilities for the financing of domestic and foreign trade.</li><li>Providing facility for the transfer of funds.</li><li>Management of customers' investment.</li><li>Safe keeping of valuables.</li><li>Brokerage services (buying and selling of stocks and shares).</li><li>Providing of foreign exchange facilities for travelers.</li><li>Providing business status reports and references.</li><li>Business advisory services.</li></ul>`
            },
            {
                q: `Q2: What are the global roles of banks?`,
                a: `<strong>A:</strong> Banks play five different roles in the global economy:<br><ul><li>The intermediation role.</li><li>The payment role.</li><li>The guarantor role.</li><li>The agency role.</li><li>The policy role.</li></ul>`
            },
            {
                q: `Q3: What are the duties of the bank to their customer?`,
                a: `<strong>A:</strong> The duties of the banker include:<br><ul><li>The bank undertakes to receive money and settle bills for its customer's account.</li><li>The bank borrows the proceeds and undertakes to repay them.</li><li>The bank will not cease to do business with the customer except upon reasonable notice.</li><li>The bank is not liable to pay until the customer demands payment from the bank.</li><li>The bank should only make such payments as the customer has authorized (Pay according to Customers Instruction).</li><li>The bank should not refuse to make payments up to the limit of the customer's credit balance.</li><li>The banker has a duty to keep in confidence what he/she knows about the customer's affairs (Confidentiality).</li><li>The bank has a duty to provide the customer on request with a statement of account.</li></ul>`
            },
            {
                q: `Q4: The bank's businesses can be classified into two groups. What are those two groups?`,
                a: `<strong>A:</strong> Banking is divided into two main categories:<br><ul><li>Business groups.</li><li>Support groups.</li></ul>`
            },
            {
                q: `Q5: List the Consumer protection framework for banks.`,
                a: `<strong>A:</strong> The consumer protection framework seeks to guarantee:<br><ul><li>High standards for customer service delivery.</li><li>Market discipline.</li><li>Fair treatment of customers by banks.</li><li>Offer protection to the vulnerable group (less educated people, elderly, critically ill, refugees, physically challenged people etc.).</li></ul>`
            },
            {
                q: `Q6: List and explain five principles of the consumer protection framework.`,
                a: `<strong>A:</strong> The manual outlines nine principles; you can select any five:<br><ul><li>Legal, Regulatory, and Supervisory Framework: There shall be effective structures to protect consumers of banking services.</li><li>Responsible Business Conduct: Financial Institutions shall observe high ethical standards and offer suitable products.</li><li>Disclosure and Transparency: Financial institutions shall provide accurate, timely, detailed, and clear information.</li><li>Consumer Financial Education: Impart financial knowledge and skill to enable consumers to make informed decisions.</li><li>Fair treatment: Consumers shall be treated equitably without bias.</li><li>Protection of Consumer Assets and Privacy: Appropriate measures shall guarantee protection of consumer assets and personal information.</li><li>Complaints Handling and Redress: Adequate measures shall be established to address disputes fairly and transparently.</li><li>Competition: Competitive markets should be promoted to encourage innovation and excellent service delivery.</li><li>Enforcement: Ensure effective enforcement of regulations with the application of appropriate sanctions.</li></ul>`
            },
            {
                q: `Q7: What are the two major sources of the bank's income?`,
                a: `<strong>A:</strong> The two major sources of income are:<br><ul><li>Net Interest margin (Interest Income Less Interest Expense).</li><li>Commission and Fees.</li></ul>`
            }
        ]
    },
    {
        id: "mod2",
        title: "Module 2: Customer Service",
        isCaseStudy: false,
        questions: [
            {
                q: `Q8: What's the primary function of the CSU?`,
                a: `<strong>A:</strong> The Customer Service Unit (CSU) is the first point of contact when a customer comes to the Bank. Its broad functions include:<br><ul><li>Account opening.</li><li>Issuance of customer cheque books.</li><li>Receiving customers' standing orders.</li><li>Receiving and effecting stop payment.</li><li>Making changes to customers mandates.</li><li>Performing the signature verification functions.</li><li>Attending to balance and general customer enquiries.</li><li>Receiving and handling customers' complaints.</li><li>Updating of Customer Mandates.</li></ul>`
            },
            {
                q: `Q9: What are the roles of a lobby officer in the CSU?`,
                a: `<strong>A:</strong> Lobby Service officers play a primarily customer service role and assist customers in the banking hall. Their functions include:<br><ul><li>Welcoming and greeting customers as they come into the banking hall.</li><li>Directing customers to the appropriate service points.</li><li>Ensuring orderly conduct amongst customers in the banking hall.</li><li>Addressing customers questions and concerns.</li><li>Assisting with queue management to decongest the banking hall.</li><li>Answering the telephone in a friendly, professional manner, taking messages with accuracy.</li></ul>`
            },
            {
                q: `Q10: In the context of the CSU security, what measures should be taken to ensure confidentiality of customers?`,
                a: `<strong>A:</strong> The security functions of the CSU include:<br><ul><li>Keeping all cheque booklets issued and un-issued in the fireproof cabinets.</li><li>Complying with the provisions of the SOP with respect to re-order level for the stock of cheque books.</li><li>Time-stamping all incoming requests or mails and have records of outgoing mails.</li><li>Maintaining confidentiality in the treatment of all Customers' data.</li><li>Releasing cheque books as authorized by the Customers only.</li><li>Keeping stamps, files, copies of Customers letters and phone numbers away when closing.</li></ul>`
            },
            {
                q: `Q11: Give four examples of deposit accounts.`,
                a: `<strong>A:</strong> The manual lists several categories of accounts. You can choose from:<br><ul><li>Checking Accounts (Personal, Joint, Sole Proprietorship, Corporate, Unlimited Companies, Public Sector, NGO's Accounts).</li><li>Savings Accounts.</li><li>Minor Accounts.</li><li>Partnership Accounts.</li><li>Investment Accounts.</li><li>Unincorporated, Society or Executor's Accounts.</li><li>External Accounts.</li><li>Domiciliary Accounts.</li><li>Trustee Accounts.</li></ul>`
            },
            {
                q: `Q12: Differentiate between current and savings account.`,
                a: `<strong>A:</strong> The key operational differences include:<br><ul><li>A Current Account is subject to a Current Account Maintenance Fee (CAMF) applied to customer induced debit transactions.</li><li>A Savings account is not subject to CAMF for withdrawals or transfers.</li><li>A Savings account cannot be thrown into debit.</li><li>Current accounts can accommodate loan repayments without incurring the CAMF charge.</li></ul>`
            },
            {
                q: `Q13: What is the main responsibility of the CSU staff for resolving complaints?`,
                a: `<strong>A:</strong> Handling customer complaints requires the CSU staff to:<br><ul><li>Keep a logbook for customer complaints.</li><li>Clearly establish what went wrong.</li><li>Identify alternative solutions.</li><li>Seek to correct error immediately.</li><li>Institute a process to avoid re-occurrence.</li><li>Inform customer of your actions and promise that there will not be repeat errors.</li><li>Ensure the customer is properly restituted and not made to suffer any loss in any form.</li><li>Let customer express emotions and train staff to see customer's point of view.</li><li>Gather information accurately and politely from the customer.</li></ul>`
            },
            {
                q: `Q14: List five categories of accounts commonly offered by the bank and explain.`,
                a: `<strong>A:</strong> The manual lists ten categories; you can list any five:<br><ul><li>Checking Accounts (includes Personal, Joint, Sole Proprietorship, Corporate, Unlimited Companies, Public Sector, NGO's Accounts).</li><li>Savings Accounts.</li><li>Minor Accounts.</li><li>Partnership Accounts.</li><li>Investment Accounts.</li><li>Unincorporated, Society or Executor's Accounts.</li><li>External Accounts.</li><li>Domiciliary Accounts.</li><li>Trustee Accounts.</li></ul>`
            },
            {
                q: `Q15: Explain the importance of verifying customer information and identification.`,
                a: `<strong>A:</strong> Verifying customer information (like BVN) is crucial because it:<br><ul><li>Provides a means of identifying and verifying the identity of each customer across all banks in Nigeria.</li><li>Checks identity theft, ensures safety of customers' funds, and avoids losses through compromise of Personal Identification Numbers (PIN).</li><li>Increases access, convenience, and service levels across the industry.</li><li>Promotes financial inclusion and revolutionizes the Payment System.</li><li>Enhances the integrity of banking services delivery by building a reliable customer identification system.</li></ul>`
            },
            {
                q: `Q16: What types of documents need to be submitted to create a corporate account?`,
                a: `<strong>A:</strong> The documents required for a Corporate Current Account include:<br><ul><li>Completed Account Opening Forms.</li><li>Identification of all signatories.</li><li>Copy of Certificate of Incorporation.</li><li>Certified Copy of Form CAC 2.3, CO7, CO2/ Status Report.</li><li>Certified Copy of Memo and Articles of Association.</li><li>Board Resolution to Open Account.</li><li>SCUML "where required".</li><li>Tax identification number (TIN).</li><li>License where required for consultancy and professional bodies.</li><li>BVN authentication and verification.</li></ul>`
            },
            {
                q: `Q17: Explain deferrals in the context of account opening.`,
                a: `<strong>A:</strong> <ul><li>Deferrals can be done by designated senior staff.</li><li>Deferrals on CO7 should not exceed 30 days and no cheque book may be issued during this period.</li><li>Only very senior executive staff can defer any document for the Public Sector.</li><li>Banks can lose money through a shoddy handling of deferrals because the banking relationship is not yet fully established until all documentation are received from the Customer.</li><li>Statutory Documents cannot be waived under any circumstances.</li></ul>`
            }
        ]
    },
    {
        id: "mod3",
        title: "Module 3: Cash & Teller",
        isCaseStudy: false,
        questions: [
            {
                q: `Q18: What is the significance of the layout and design in the teller area?`,
                a: `<strong>A:</strong> <ul><li>The layout and design can serve as a source of motivation to the Staff and customers.</li><li>Queue management skill is measured at the Teller points.</li><li>Speed of service can easily be established by a prospective Customer.</li><li>Courtesy extended by Tellers can be seen by all as it is an open place.</li><li>The Customers first impression of a Bank and the Staff is at the CTU and CSU.</li></ul>`
            },
            {
                q: `Q19: How does CCTV in a teller area contribute to bank security and operations?`,
                a: `<strong>A:</strong> CCTV is of great importance as it helps to:<br><ul><li>Monitor tellers for fraud.</li><li>Provide teller area supervision especially when the supervisor is not directly in the banking hall.</li><li>Deter robberies to an extent as the intended robber knows their face will be caught on camera.</li><li>Give customers additional comfort and confidence once they know the premises and teller area are under surveillance.</li><li>Prove highly useful during investigations.</li></ul>`
            },
            {
                q: `Q20: What qualities are expected from a teller in a banking environment?`,
                a: `<strong>A:</strong> Teller qualities include:<br><ul><li>Honesty and Integrity.</li><li>Courtesy.</li><li>Neat and welcoming.</li><li>Speed and accuracy.</li><li>Enthusiasm.</li><li>Security consciousness.</li><li>Courageous.</li></ul><br>Additionally, they must possess basic skills such as communication, numeric, interpersonal, listening, and problem solving skills.`
            },
            {
                q: `Q21: Who is a bank teller?`,
                a: `<strong>A:</strong> <ul><li>A Teller is an employee of a bank who handles customer transactions, processes deposits/withdrawals, and balances cash drawers.</li><li>They are a banking professional who works at the front line of a bank branch.</li><li>They also answer customer questions, resolve issues and cross sell banks other products and services.</li></ul>`
            },
            {
                q: `Q22: Why is it important for a teller to resume earlier than other staff?`,
                a: `<strong>A:</strong> Tellers should resume earlier than 7:30am to:<br><ul><li>Switch on their computer and get ready for work.</li><li>Review their compartment and ensure no cash was left in the cubicle.</li><li>Pick their till boxes from the vault.</li><li>Receive an initial cash allocation to ensure they have sufficient cash to start the day.</li></ul>`
            },
            {
                q: `Q23: What is the sequence of activities tellers must perform at the end of the day?`,
                a: `<strong>A:</strong> The end-of-day sequence includes:<br><ul><li>The Teller balances their position by checking the balance on the system and comparing it to the balance of cash on hand.</li><li>If there is a difference, they print out the transaction journal and do a call over to resolve the error, escalating to a supervisor if it persists.</li><li>Complete the proof sheet to show the summary of activities for the day.</li><li>Make up a batch by enveloping all the instruments.</li><li>Complete a teller transfer slip to transfer (sell) any cash in the cubicle back to the vault.</li><li>Evacuate cash into the vault with the Vault Custodian.</li><li>Return loose cash, stamps, and proofs into the till box, lock it, and sign the vault record book alongside the Vault Custodian.</li></ul>`
            },
            {
                q: `Q24: Who are the key personnel involved in vault operations and what is the importance of dual control?`,
                a: `<strong>A:</strong> <ul><li>The key personnel are the Vault Custodian, Tellers / Bulk Tellers, Head Teller, Head of Operations, and Branch Services Manager.</li><li>The Vault must be under Dual Control to ensure that all cash movements from any of the stakeholders are done securely and in line with the Bank policy.</li></ul>`
            },
            {
                q: `Q25: Differentiate between a cash shortage and a cash overage.`,
                a: `<strong>A:</strong> <ul><li><strong>Cash Shortage:</strong> A situation whereby the physical cash with the Teller is less than the balance shown by the system and Teller Proof (often due to overpayment to customers or pilfering).</li><li><strong>Cash Overage (Surplus):</strong> A situation whereby the physical cash with the Teller is more than the balance shown by the system and Teller Proof (often due to deliberate or genuine under-payment to customers).</li></ul>`
            },
            {
                q: `Q26: How do you process a deposit tagged 'Subject to Count' (STC)?`,
                a: `<strong>A:</strong> To process an STC deposit:<br><ul><li>Ensure a legally signed and executed Subject to Count agreement is in place between the bank and the customer.</li><li>Review the Deposit Slip for regularity.</li><li>Bundle count the cash deposits.</li><li>Pass entries immediately: Debit the Cash Account and Credit the customer's account immediately.</li><li>Release the acknowledgement slip to the customer.</li><li>Count the cash in detail within 24 hours.</li><li>Debit/Credit the customer's account under advice for any discovered shortages/overages.</li></ul>`
            },
            {
                q: `Q27: How do you handle a late cash deposit?`,
                a: `<strong>A:</strong> Handling a late deposit requires the teller to:<br><ul><li>Review the Deposit Slip for regularity.</li><li>Verify (detail count) cash in the presence of the depositor.</li><li>Machine stamp and write or rubber stamp "late deposit for credit on (date)" on the deposit slip.</li><li>Advise the depositor that credit to their account will be made the following business day.</li><li>Obtain the Cash Officer's/Supervisor's initials on the deposit slip and the Late Cash register.</li><li>Release the acknowledgement copy to the depositor.</li><li>Record Cash in the Teller Proof as Late Cash and place the deposit in the cash box/vault.</li><li>Process the deposit the following business day.</li></ul>`
            },
            {
                q: `Q28: What is the importance of maintaining a difference account for each teller?`,
                a: `<strong>A:</strong> <ul><li>The branch will have a specific difference account for shortages and overages.</li><li>It allows tellers to prepare debit or credit GL tickets to formally record unresolved cash differences, ensuring proper tracking and accountability.</li><li>It requires the signature of the Cash Officer/Head of Cash, maintaining strict oversight.</li></ul>`
            },
            {
                q: `Q29: What are the steps for handling counterfeit notes and forged checks?`,
                a: `<strong>A:</strong> <ul><li>For counterfeit notes: Tellers must check for counterfeits under ultraviolet light during the cash counting process.</li><li>For forged checks: The teller must refer unusual endorsements, such as cheques that appear to be forged or cloned, to the Cash Officer/Head of Cash for review and approval before any payment is made.</li></ul>`
            }
        ]
    },
    {
        id: "mod4",
        title: "Module 4: Clearing Operations",
        isCaseStudy: false,
        questions: [
            {
                q: `Q30: Who are the parties involved in a payment and settlement process (specifically for checks)?`,
                a: `<strong>A:</strong> The parties to the payments/settlements process are:<br><ul><li>Cheque Depositor.</li><li>Beneficiary.</li><li>Collection Bank.</li><li>Clearing House.</li><li>Bank 1 (Paying Bank).</li><li>Payer / Cheque Issuer.</li></ul>`
            },
            {
                q: `Q31: What is a dud check?`,
                a: `<strong>A:</strong> <ul><li>A dud check is one issued to induce the delivery of any asset or property, or to settle a lawful obligation, which when presented within a reasonable period of time is dishonoured (bounced) on grounds of lack of funds or insufficient funds in the account of the Issuer.</li></ul>`
            },
            {
                q: `Q32: How does the issuance of dud checks affect the financial system?`,
                a: `<strong>A:</strong> <ul><li>It erodes confidence and integrity in financial instruments.</li><li>It adversely affects the CBN 'Cash-lite' policy and the stability of the Financial System.</li></ul>`
            },
            {
                q: `Q33: What is clearing?`,
                a: `<strong>A:</strong> <ul><li>Clearing is a process of effecting settlements between third parties through the use of banks' instruments (e.g., cheques, drafts, dividend warrants).</li></ul>`
            }
        ]
    },
    {
        id: "mod5",
        title: "Module 5: Treasury Operations",
        isCaseStudy: false,
        questions: [
            {
                q: `Q34: What is the full meaning of NIBSS, CP, BA, Forex, and TC?`,
                a: `<strong>A:</strong> <ul><li><strong>NIBSS:</strong> Nigeria Interbank Settlement Systems.</li><li><strong>CP:</strong> Commercial Papers.</li><li><strong>BA:</strong> Bankers Acceptances.</li><li><strong>Forex:</strong> Foreign Exchange.</li><li><strong>TC:</strong> Travelers' Cheques.</li></ul>`
            },
            {
                q: `Q35: What is SWIFT and what is RTGS?`,
                a: `<strong>A:</strong> <ul><li><strong>SWIFT:</strong> The Society for Worldwide Interbank Financial Telecommunication. It is a highly secure platform used for processing foreign currency transactions and settlements between correspondent banks.</li><li><strong>RTGS:</strong> Real Time Gross Settlement. It is a settlement system where the transfer of large funds or securities between banks is executed on a "real time" (without delay) and "gross" (one-to-one) basis.</li></ul>`
            },
            {
                q: `Q36: What is the bank's risk exposure on a clean Commercial Paper, and why do investors prefer guaranteed ones?`,
                a: `<strong>A:</strong> <ul><li>Commercial Papers (CP) are completely unsecured unless a Bank adds its Guarantee, thereby becoming a Guaranteed Commercial Paper (GCP).</li><li>On a clean CP, the customer is the primary obligor, leaving the investor exposed to default risk.</li><li>Investors prefer guaranteed ones because the bank becomes a secondary obligor, providing a formal guarantee of payment.</li></ul>`
            },
            {
                q: `Q37: Explain Open Buy Back (OBB) and Fixed Buy Back (FBB).`,
                a: `<strong>A:</strong> <ul><li>Both are inter-bank placements or takings that are secured by Treasury Bills.</li><li><strong>Open Buy Back (OBB):</strong> Has a flexible timing (as short as 1 day/overnight or as long as 91 days). Being "open", either the counterparty or the bank can call for its deposit back at any time.</li><li><strong>Fixed Buy Back (FBB):</strong> Funds are pledged to the counterparty for a strictly fixed period, meaning the counterparty cannot call for its deposit back at any time.</li></ul>`
            },
            {
                q: `Q38: List five notable source documents in Treasury Operations.`,
                a: `<strong>A:</strong> The notable sources include:<br><ul><li>Deal Slips from the Treasury Dealers.</li><li>CBN Debits and Credits statements.</li><li>Cash lodgments Slips from the Treasury Department.</li><li>Cash Withdrawals Slips from the Treasury Department.</li><li>Foreign Exchange Deals Slips from the Foreign Exchange Department.</li></ul>`
            },
            {
                q: `Q39: What typical entries can be found in a CBN statement?`,
                a: `<strong>A:</strong> TROPS raises entries for CBN statements which include:<br><ul><li>Cash call.</li><li>Cash Reserve Requirements (CRR).</li><li>Government Agencies Transactions (such as CBN cash lodgments and withdrawals).</li></ul>`
            },
            {
                q: `Q40: What processing platforms are available to Treasury Operations?`,
                a: `<strong>A:</strong> The processing platforms available to TROPS include:<br><ul><li>The Bank's Core Banking Package (e.g. Flexcube).</li><li>RTGS / CIFTS (NISS).</li><li>CBN T24 (DEPO X).</li><li>SWIFT.</li></ul>`
            },
            {
                q: `Q41: Explain the following controls: Segregation of Duties, Authorization, Authorization Limits, Written Mandates, and Confirmation.`,
                a: `<strong>A:</strong> <ul><li><strong>Segregation of Duties:</strong> One person must not be allowed to initiate a transaction and conclude it; initiation, confirmation, recording, and settlement must be separated.</li><li><strong>Authorization:</strong> The staff that prepares the source document should not be the one to approve or authorize its posting.</li><li><strong>Authorization Limits:</strong> Setting limits in figures for staff, dictating what amounts signatories can approve and what junior/senior dealers can handle.</li><li><strong>Written Mandates:</strong> All instructions must be in writing; staff should not implement verbal instructions even from top Management as they can be denied.</li><li><strong>Confirmation:</strong> Due to their magnitude, all TROPS transactions must be independently confirmed before processing.</li></ul>`
            }
        ]
    },
    {
        id: "mod6",
        title: "Module 6: Funds Transfer",
        isCaseStudy: false,
        questions: [
            {
                q: `Q42: What are the primary objectives of any payment and settlement system?`,
                a: `<strong>A:</strong> <ul><li>The primary objectives of any settlement system are safety, security, soundness, effectiveness, and efficiency.</li></ul>`
            },
            {
                q: `Q43: What are the main differences between a traditional payment system and an electronic payment system?`,
                a: `<strong>A:</strong> <ul><li><strong>Traditional Payment System:</strong> Involves payments using cash and paper instruments like cheques and drafts. The value for most of these instruments is not immediate as they must be cleared.</li><li><strong>Electronic Payment System:</strong> A paperless system utilizing devices like Telephones, Computers, the Internet, and ATMs. Transactions handled this way are cheaper and processed more efficiently.</li></ul>`
            },
            {
                q: `Q44: What is the primary purpose of a wholesale payment system?`,
                a: `<strong>A:</strong> <ul><li>A wholesale payment system handles high-value transactions between banks, governments, and other financial organizations.</li><li>These transactions are done through robust platforms like SWIFT and NIBSS (NEFT).</li></ul>`
            },
            {
                q: `Q45: Give examples of retail payment systems.`,
                a: `<strong>A:</strong> <ul><li>Retail payment systems cover transactions involving individual customers using Smart Cards, ATMs, Phone banking, and other similar electronic banking products.</li></ul>`
            },
            {
                q: `Q46: What types of payments are covered by bulk NEFT credits and bulk NEFT debits?`,
                a: `<strong>A:</strong> <ul><li><strong>Bulk NEFT Credits:</strong> These cover automated direct credits like salary and pension payments, and shareholders' dividends.</li><li><strong>Bulk NEFT Debits:</strong> These cover automated direct debits based on pre-authorized instructions, such as insurance premium payments, scheduled donations, and utility bill payments.</li></ul>`
            },
            {
                q: `Q47: What are the key advantages of a mobile money account?`,
                a: `<strong>A:</strong> With a Mobile Money account, a customer can:<br><ul><li>Deposit and Withdraw from their account directly via their phone.</li><li>Transfer money to anyone on any network.</li><li>Pay bills and buy airtime conveniently.</li><li>Send funds easily, as the mobile account of a beneficiary will be credited instantly.</li></ul>`
            },
            {
                q: `Q48: How do banks use dedicated instant payment systems for third-party transfers?`,
                a: `<strong>A:</strong> <ul><li>The bank installs the software on the customer's mobile phone and issues a USER ID and Password.</li><li>The remitter accesses the platform, selects the beneficiary's bank, enters the account details and amount, and sends the instruction.</li><li>Instantaneously, the remitter's account is debited and the beneficiary's account is credited, and both parties receive alerts.</li></ul>`
            },
            {
                q: `Q49: What are the primary goals of Fintech companies and how do they impact traditional banks?`,
                a: `<strong>A:</strong> <ul><li>The goal of FinTech companies is to make financial services easily accessible to the population, enhance financial procedures, promote financial inclusion, and ensure seamless payments.</li><li>They impact traditional banks by posing a direct competitive threat, offering the same services and forcing traditional banks to innovate to guarantee their survival.</li></ul>`
            },
            {
                q: `Q50: Who are the parties to a funds transfer process?`,
                a: `<strong>A:</strong> The parties to FT (whether local or foreign) are:<br><ul><li>Remitter or Sender.</li><li>Remitter or Sender's Bank.</li><li>Beneficiary.</li><li>Beneficiary's Bank.</li><li>Intermediary (maybe CBN, NIBSS, Discount Houses).</li></ul>`
            }
        ]
    },
    {
        id: "mod7",
        title: "Module 7: Electronic Banking",
        isCaseStudy: false,
        questions: [
            {
                q: `Q51: What are the potential benefits for customers using a mobile banking app?`,
                a: `<strong>A:</strong> The benefits of electronic/mobile banking include:<br><ul><li><strong>Convenience:</strong> Conduct transactions from anywhere with internet access.</li><li><strong>Speed and Efficiency:</strong> Faster processing without paperwork.</li><li><strong>Cost-effectiveness:</strong> Automating processes saves money.</li><li><strong>24/7 availability:</strong> Services available round the clock.</li><li><strong>Security:</strong> Protected by encryption and firewalls.</li><li><strong>Personalized services:</strong> Targeted messages and offers.</li><li><strong>Environmental Benefits:</strong> Reduces paper waste.</li><li><strong>Account & Investment Management:</strong> Easy tracking of finances and stock trading.</li></ul>`
            },
            {
                q: `Q52: What is a major challenge or risk retail banks face with mobile banking apps?`,
                a: `<strong>A:</strong> Challenges and risks include:<br><ul><li><strong>Security Attacks:</strong> E-banking channels are vulnerable to cyberattacks as they rely on internet networks.</li><li><strong>Fraud:</strong> Fraudsters use phishing and social engineering to target customers.</li><li><strong>Insider Threats:</strong> Employees misusing access to customer data.</li><li><strong>Lack of Customer Awareness:</strong> Customers inadvertently exposing themselves to risks by sharing logins or falling for scams.</li><li><strong>Regulatory Compliance:</strong> Adapting to complex and time-consuming rules, like OTP usage during network issues.</li></ul>`
            }
        ]
    },
    {
        id: "mod8",
        title: "Module 8: Foreign Operations",
        isCaseStudy: false,
        questions: [
            {
                q: `Q53: List five transactions that can be documented using the e-form NCX.`,
                a: `<strong>A:</strong> E-Form NCX handles Non-Commercial Exports where payments are not expected. Transactions include:<br><ul><li>Gifts/Personal effects.</li><li>Trade Samples/printed Business Matter.</li><li>Machineries/Equipment for repairs & replacement abroad.</li><li>Return of Machineries/Equipment after the execution of specific contract.</li><li>Return of empty containers.</li><li>Trans-shipments/Re-exports.</li><li>Supplies to Diplomatic/Consular Missions and supplies to UNO for their own needs.</li></ul>`
            }
        ]
    },
    {
        id: "cases",
        title: "Case Studies",
        isCaseStudy: true,
        questions: [
            {
                q: `Case Study 1: How do you process a Zenith Bank check for 5 million Naira paid into an Access Bank account?`,
                a: `<strong>A:</strong> <ul><li>This is processed as an Other Banks' Cheques (OBC) transaction because it is drawn on another bank but payable to our customer.</li><li>It will be processed through the Clearing House with a forward value date (T+1).</li></ul>`
            },
            {
                q: `Case Study 2: How do you treat an Access Bank check for 3 million Naira paid into another Access Bank account?`,
                a: `<strong>A:</strong> <ul><li>It is processed internally as an In-House Account-To-Account Transfer since both the drawer and payee are domiciled with the same Drawee bank.</li></ul>`
            },
            {
                q: `Case Study 3: A customer pays a UBA check for 10.1 million Naira. How is it processed?`,
                a: `<strong>A:</strong> <ul><li>Because the amount exceeds the maximum limit for cheques (N10 million fixed by the CBN), it cannot be cleared via standard cheque truncation.</li><li>The customer must utilize electronic channels like RTGS to transfer the funds.</li></ul>`
            },
            {
                q: `Case Study 4: What platform should be used to debit an account for 7.5 million Naira to pay salaries for 550 staff?`,
                a: `<strong>A:</strong> <ul><li><strong>Bulk NEFT Credits</strong> should be used, as they are Automated Direct Credits designed specifically to facilitate paperless clearing of bulk credits like salaries.</li></ul>`
            },
            {
                q: `Case Study 5: What platform is used to debit an account for 75 million Naira and purchase $75,000 for transfer?`,
                a: `<strong>A:</strong> <ul><li><strong>SWIFT</strong> is used for processing the foreign currency transactions and settlement instructions offshore.</li><li><strong>RTGS</strong> is used for the high-value Naira settlement.</li></ul>`
            },
            {
                q: `Case Study 6: Assume Access Bank wants to buy $150,000 from First Bank. What platform will Access Bank use?`,
                a: `<strong>A:</strong> <ul><li>Access Bank will use <strong>RTGS</strong> to execute the real-time interbank Naira settlement.</li><li>Access Bank will use <strong>SWIFT</strong> to process the foreign exchange settlement.</li></ul>`
            },
            {
                q: `Case Study 7: What platform should a customer use to transfer 135,000 Naira to a secondary school for fees?`,
                a: `<strong>A:</strong> <ul><li>The customer should use <strong>Single Item NEFT</strong> (which covers individual transfers like tuition payments) or <strong>NIBSS Instant Payment (NIP)</strong>.</li></ul>`
            }
        ]
    }
];