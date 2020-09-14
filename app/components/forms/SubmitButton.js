import React from "react";
import { View, Text } from "react-native";
import { useFormikContext } from "formik";
import AppButton from "../AppButton";
import colors from "../../config/colors";

export default function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton title={title} color={colors.primary} onPress={handleSubmit} />
  );
}
