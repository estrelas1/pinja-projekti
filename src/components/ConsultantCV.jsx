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
    fontFamily: 'Helvetica-Bold'
  },
  section: {
    marginBottom: 15,
  },
  label: {
    fontFamily: 'Helvetica-Bold',
    marginBottom: 3,
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
        <Text style={styles.label}>Koulutus:</Text>
        <Text style={styles.text}>
          {consultant.education} ({consultant.graduationYear})
        </Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.label}>Sertifikaatit:</Text>
        <Text style={styles.text}>
          {consultant.certifications.join(', ')}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Teknologiat:</Text>
        <Text style={styles.text}>
          {consultant.technologies.join(', ')}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Kokemusvuodet:</Text>
        <Text style={styles.text}>
          {consultant.experienceYears}
        </Text>
      </View>
    </Page>
  </Document>
);

export default ConsultantCV;