const ValidationService = {
  isValidCPFCNPJDocument(input: string) {
    return input.length === 11 || input.length === 14;
  },
  isValidEmail(input: string) {
    return String(input)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  },
  isValidPhone(input: string) {
    const rawNumberLength = input
      .replace("(", "")
      .replace(")", "")
      .replace(" ", "")
      .replace("-", "").length;

    return rawNumberLength === 10 || rawNumberLength === 11;
  },
  isValidPostCode(input: string) {
    const rawCodeLength = input.replace("-", "").length;

    return rawCodeLength === 8;
  },
};

export { ValidationService };
