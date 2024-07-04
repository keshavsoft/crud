import { StartFunc as FetchDelete } from "./FetchDelete/Entry.js";

const StartFunc = async (row, $element, field) => {
    console.log("field:", field);
    if (field === 2) {
        let jVarLocalFromSwal = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "error",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "grey",
            returnInputValueOnDismiss: true,
            confirmButtonText: "Yes, delete it!",
            // returnFocus:false,
            reverseButtons: true,
            focusCancel: true,
            cancelButtonText: "Cancel"
        });

        if (jVarLocalFromSwal.isConfirmed) {
            await FetchDelete({ inRowPk: row.pk });
        };
    };
};

export { StartFunc };
