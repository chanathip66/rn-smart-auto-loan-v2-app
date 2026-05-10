import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const carkey = require("@/assets/images/carkey.png");

const formatBaht = (n: number) =>
  n.toLocaleString("th-TH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export default function Result() {
  const params = useLocalSearchParams<{
    price?: string;
    downPercent?: string;
    months?: string;
    interest?: string;
  }>();

  const price = parseFloat(params.price ?? "0") || 0;
  const downPercent = parseFloat(params.downPercent ?? "0") || 0;
  const months = parseInt(params.months ?? "0", 10) || 0;
  const interest = parseFloat(params.interest ?? "0") || 0;

  // คำนวณแบบดอกเบี้ยคงที่ (Flat Rate) ตามรูปแบบสินเชื่อรถยนต์ในไทย
  const downPayment = price * (downPercent / 100);
  const financed = price - downPayment; // ยอดจัด
  const totalInterest = financed * (interest / 100) * (months / 12);
  const totalPayable = financed + totalInterest;
  const monthly = months > 0 ? totalPayable / months : 0;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={carkey} style={styles.icon} />
        <Text style={styles.headerTitle}>สรุปยอดผ่อนชำระ</Text>
      </View>

      {/* Card แสดงยอดผ่อนต่อเดือน (Highlight) */}
      <View style={styles.highlightCard}>
        <Text style={styles.highlightLabel}>ผ่อนเริ่มต้นเพียง</Text>
        <Text style={styles.highlightValue}>{formatBaht(monthly)}</Text>
        <Text style={styles.highlightUnit}>บาท / เดือน </Text>
      </View>

      {/* Detail List */}
      <View style={styles.detailContainer}>
        <View style={styles.row}>
          <Text style={styles.rowLabel}> ราคารถยนต์</Text>
          <Text style={[styles.rowValue]}>{formatBaht(price)} บาท</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowLabel}> เงินดาวน์ ({downPercent}%)</Text>
          <Text style={[styles.rowValue]}>{formatBaht(downPayment)} บาท</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowLabel}> ยอดจัด</Text>
          <Text style={[styles.rowValue]}>{formatBaht(financed)} บาท</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.rowLabel}> ดอกเบี้ย ({interest}% ต่อปี)</Text>
          <Text style={[styles.rowValue]}>{formatBaht(totalInterest)} บาท</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowLabel}> ระยะเวลาผ่อน</Text>
          <Text style={[styles.rowValue]}>{months} งวด</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowLabel}> ยอดผ่อนรวม</Text>
          <Text style={[styles.rowValue]}>{formatBaht(totalPayable)} บาท</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.homeBtn} onPress={() => router.back()}>
        <Text style={styles.btnText}>คำนวณใหม่</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1E293B", padding: 20 },
  header: { alignItems: "center", marginTop: 40, marginBottom: 20 },
  icon: { width: 80, height: 80, marginBottom: 10 },
  headerTitle: { fontFamily: "Kanit_700Bold", fontSize: 24, color: "#FFF" },

  highlightCard: {
    backgroundColor: "#2563EB",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    elevation: 5,
  },
  highlightLabel: {
    fontFamily: "Kanit_400Regular",
    color: "#BFDBFE",
    fontSize: 16,
  },
  highlightValue: {
    fontFamily: "Kanit_700Bold",
    color: "#FFF",
    fontSize: 48,
    marginVertical: 5,
  },
  highlightUnit: {
    fontFamily: "Kanit_400Regular",
    color: "#FFF",
    fontSize: 14,
  },

  detailContainer: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 24,
    marginBottom: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  rowLabel: { fontFamily: "Kanit_400Regular", color: "#64748B", fontSize: 16 },
  rowValue: { fontFamily: "Kanit_600SemiBold", fontSize: 18 },
  divider: { height: 1, backgroundColor: "#E2E8F0", marginVertical: 10 },
  note: {
    fontFamily: "Kanit_400Regular",
    color: "#94A3B8",
    fontSize: 12,
    textAlign: "center",
  },

  homeBtn: {
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    marginBottom: 30,
  },
  btnText: { fontFamily: "Kanit_600SemiBold", color: "#FFF", fontSize: 16 },
});
