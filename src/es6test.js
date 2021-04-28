const getEmpInfo = (employee, ...info) => {
  const emp = {
    ...employee,
    info,
  };

  return `
  ---------------------xxx-------------------------
  Hello ${employee.name}.
  Find your info below...

  ${JSON.stringify(emp)}

  Note: this is computed by brand new es6 syntax (arrow function, spread operator, rest parameter and export)
  ---------------------xxx-------------------------
  `;
};

export { getEmpInfo };
