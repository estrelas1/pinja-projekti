import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// tyylit PDF-dokumentille
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
  },
  section: {
    marginBottom: 15,
  },
  text: {
    marginBottom: 5,
  },
});

const ConsultantCV = ({ consultant }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.header}>{consultant.name}</Text>
      <View style={styles.section}>
        <Text style={styles.text}>
          <strong>Koulutus:</strong> {consultant.education} ({consultant.graduationYear})
        </Text>
        <Text style={styles.text}>
          <strong>Sertifikaatit:</strong> {consultant.certifications.join(', ')}
        </Text>
        <Text style={styles.text}>
          <strong>Teknologiat:</strong> {consultant.technologies.join(', ')}
        </Text>
        <Text style={styles.text}>
          <strong>Kokemusvuodet:</strong> {consultant.experienceYears}
        </Text>
      </View>
    </Page>
  </Document>
);

export default ConsultantCV;