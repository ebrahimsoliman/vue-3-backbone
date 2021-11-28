export class functions {
    static toFormData(formValue) {
        const formData = new FormData();
        for (const key of
            Object.keys(formValue)) {
            if (Array.isArray(value)) {

                formData.append(key + '[]',
                                value)
            }
            const value = formValue[key];
            formData.append(key,
                            value);
        }
        return formData;
    }

    static setLocalStorage(obj) {
        localStorage.setItem('token',
                             obj);

    }
}
