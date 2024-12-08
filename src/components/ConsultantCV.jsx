import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// tyylit PDF-dokumentille
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: 'Helvetica',
    backgroundColor: '#f8f8f8'
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#333',
    textAlign: 'center'
  },
  section: {
    marginBottom: 15,
    borderBottom: '1px solid #ddd'
  },
  label: {
    fontFamily: 'Helvetica-Bold',
    marginBottom: 5,
    fontSize: 13,
    color: '#444'
  },
  text: {
    marginBottom: 5,
    fontSize: 12,
    color: '#666'
  },
  list: {
    marginLeft: 15,
    marginBottom: 5
  },
  listItem: {
    fontSize: 12,
    color: '#666',
    marginBottom: 3
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
        <View style={styles.list}>
            {consultant.certifications.map((cert, index) => (
              <Text key={index} style={styles.listItem}>
                {cert}
              </Text>
            ))}
          </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Teknologiat:</Text>
        <View style={styles.list}>
            {consultant.technologies.map((tech, index) => (
              <Text key={index} style={styles.listItem}>
                {tech}
              </Text>
            ))}
          </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Kokemusvuodet:</Text>
        <Text style={styles.text}>{consultant.experienceYears}</Text>
      </View>

    </Page>
  </Document>
);

export default ConsultantCV;