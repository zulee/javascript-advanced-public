const validateMACAddress = (macAddress) => {
  const MACPattern = /^[0-9a-fA-F]{1,2}([.:-])(?:[0-9a-fA-F]{1,2}\1){4}[0-9a-fA-F]{1,2}$/;
  return MACPattern.test(macAddress);
};

export default validateMACAddress;
