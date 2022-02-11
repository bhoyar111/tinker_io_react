export default function validateUser(values) {
	let errors = {};
	if (!values.name) {
		errors.name = "Name is required";
	}
    return errors;
}