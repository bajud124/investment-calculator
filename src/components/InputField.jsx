export default function InputField({
  inputLabel,
  inputType,
  initialValue,
  setFieldValue,
  inputStep = 1,
}) {
  function handleFieldChange(event) {
    setFieldValue(Number(event.target.value));
  }
  return (
    <div>
      <label>{inputLabel}</label>
      <input
        type={inputType}
        value={initialValue}
        onChange={handleFieldChange}
        step={inputStep}
        onWheel={(e) => e.target.blur()}
      />
    </div>
  );
}
