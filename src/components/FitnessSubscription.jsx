import React, { useState } from "react";
import QRCode from "qrcode.react";

export function FitnessSubscription() {
  const [selectedTier, setSelectedTier] = useState(null);

  const tiers = [
    {
      id: "basic",
      name: "Basic",
      price: 200,
      description: "Get started with fitness",
      features: [
        "✓ Workout tracking",
        "✓ Basic diet plans",
        "✓ Community access",
        "✓ Progress dashboard",
      ],
      color: "#0066cc",
    },
    {
      id: "premium",
      name: "Premium",
      price: 2000,
      description: "Complete fitness transformation",
      features: [
        "✓ Everything in Basic",
        "✓ Personal trainer chat",
        "✓ Custom meal plans",
        "✓ Video library",
        "✓ Progress analytics",
        "✓ Priority support",
      ],
      color: "#ff6b00",
    },
  ];

  const bankDetails = {
    bank: "Capitec Bank",
    accountHolder: "Salman",
    accountNumber: "2590943039",
    branchCode: "470010",
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Choose Your Fitness Plan</h1>
      <p style={styles.subHeading}>
        Start your journey to better health today
      </p>

      {/* Tier Cards */}
      <div style={styles.tiersGrid}>
        {tiers.map((tier) => (
          <div key={tier.id} style={{ ...styles.tierCard, borderTopColor: tier.color }}>
            <h2 style={styles.tierName}>{tier.name}</h2>
            <p style={styles.tierDescription}>{tier.description}</p>

            <div style={styles.priceSection}>
              <span style={styles.price}>R{tier.price}</span>
              <span style={styles.period}>/month</span>
            </div>

            <ul style={styles.featuresList}>
              {tier.features.map((feature, idx) => (
                <li key={idx} style={styles.featureItem}>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              style={{ ...styles.selectBtn, backgroundColor: tier.color }}
              onClick={() => setSelectedTier(tier)}
            >
              Subscribe Now
            </button>
          </div>
        ))}
      </div>

      {/* Payment Modal */}
      {selectedTier && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <button
              style={styles.closeBtn}
              onClick={() => setSelectedTier(null)}
            >
              ✕
            </button>

            <h2 style={styles.modalHeading}>
              Subscribe to {selectedTier.name} - R{selectedTier.price}/month
            </h2>

            {/* Bank Details */}
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Bank Details</h3>
              <table style={styles.table}>
                <tbody>
                  <tr>
                    <td style={styles.tableLabel}>Bank:</td>
                    <td style={styles.tableValue}>{bankDetails.bank}</td>
                  </tr>
                  <tr>
                    <td style={styles.tableLabel}>Account Name:</td>
                    <td style={styles.tableValue}>{bankDetails.accountHolder}</td>
                  </tr>
                  <tr>
                    <td style={styles.tableLabel}>Account Number:</td>
                    <td style={styles.tableValue}>{bankDetails.accountNumber}</td>
                  </tr>
                  <tr>
                    <td style={styles.tableLabel}>Branch Code:</td>
                    <td style={styles.tableValue}>{bankDetails.branchCode}</td>
                  </tr>
                  <tr>
                    <td style={styles.tableLabel}>Amount:</td>
                    <td style={{ ...styles.tableValue, color: "#ff6b00", fontWeight: "bold" }}>
                      R{selectedTier.price}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* QR Code */}
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Quick Transfer QR Code</h3>
              <p style={styles.hint}>
                Scan with your banking app (Capitec or any bank)
              </p>
              <div style={styles.qrContainer}>
                <QRCode
                  value={`${bankDetails.bank}|${bankDetails.accountHolder}|${bankDetails.accountNumber}|${bankDetails.branchCode}|${selectedTier.price}`}
                  size={280}
                  level="H"
                  includeMargin={true}
                />
              </div>
            </div>

            {/* Instructions */}
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>How to Subscribe</h3>
              <ol style={styles.instructions}>
                <li>Open your banking app (Capitec, FNB, Standard Bank, etc.)</li>
                <li>Select "Send Money" or "New Transfer"</li>
                <li>
                  Enter account number: <strong>{bankDetails.accountNumber}</strong>
                </li>
                <li>
                  Enter amount: <strong>R{selectedTier.price}</strong>
                </li>
                <li>
                  Use reference: <strong>Your username or email</strong> (so we can activate your subscription)
                </li>
                <li>Confirm and send the payment</li>
                <li>Subscription activates within 1-2 business days</li>
              </ol>
            </div>

            {/* Important Notice */}
            <div style={styles.notice}>
              <strong>📌 Important:</strong> Make sure to use your username or email as the payment reference so we can activate your {selectedTier.name} subscription immediately after receiving payment.
            </div>

            {/* Support */}
            <div style={styles.support}>
              <p>Questions? Contact us: support@fitnessapp.com</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "40px 20px",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "36px",
    textAlign: "center",
    color: "#333",
    marginBottom: "10px",
  },
  subHeading: {
    fontSize: "16px",
    textAlign: "center",
    color: "#666",
    marginBottom: "40px",
  },
  tiersGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  tierCard: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "30px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    borderTop: "4px solid",
    transition: "transform 0.3s ease",
  },
  tierName: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "10px",
  },
  tierDescription: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "20px",
  },
  priceSection: {
    marginBottom: "20px",
    borderBottom: "2px solid #eee",
    paddingBottom: "20px",
  },
  price: {
    fontSize: "42px",
    fontWeight: "bold",
    color: "#333",
  },
  period: {
    fontSize: "14px",
    color: "#666",
    marginLeft: "5px",
  },
  featuresList: {
    listStyle: "none",
    padding: "0",
    marginBottom: "25px",
  },
  featureItem: {
    padding: "10px 0",
    fontSize: "14px",
    color: "#555",
    borderBottom: "1px solid #f0f0f0",
  },
  selectBtn: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "opacity 0.3s ease",
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "20px",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "40px",
    maxWidth: "600px",
    maxHeight: "90vh",
    overflowY: "auto",
    position: "relative",
  },
  closeBtn: {
    position: "absolute",
    top: "15px",
    right: "15px",
    backgroundColor: "#f0f0f0",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalHeading: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "30px",
    textAlign: "center",
  },
  section: {
    marginBottom: "25px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    border: "1px solid #eee",
  },
  sectionTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#0066cc",
    marginBottom: "15px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableLabel: {
    fontWeight: "bold",
    padding: "10px",
    textAlign: "left",
    borderBottom: "1px solid #eee",
    width: "40%",
    color: "#333",
  },
  tableValue: {
    padding: "10px",
    fontSize: "14px",
    borderBottom: "1px solid #eee",
    fontFamily: "monospace",
    color: "#555",
  },
  qrContainer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "8px",
  },
  hint: {
    fontSize: "12px",
    color: "#666",
    marginBottom: "15px",
  },
  instructions: {
    lineHeight: "1.8",
    fontSize: "14px",
    color: "#555",
    paddingLeft: "20px",
  },
  notice: {
    padding: "15px",
    backgroundColor: "#fff3cd",
    border: "1px solid #ffc107",
    borderRadius: "6px",
    color: "#856404",
    fontSize: "13px",
    marginBottom: "15px",
  },
  support: {
    textAlign: "center",
    fontSize: "12px",
    color: "#666",
    padding: "15px",
    backgroundColor: "#e8f4f8",
    borderRadius: "6px",
  },
};
