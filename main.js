const output = document.getElementById('calc');
const display = (props) => {
    output.value += props;
}
const cl = () => {
    output.value = '';
}
const del = () => {
    output.value = output.value.slice(0, -1);
}
const calc = () => {
    try {
        output.value = eval(output.value);
    } catch (err) {
        output.value = 'Error';
    }
}