// This file is used to fetch the product entries from the server

async function getProductEntries(){
    return fetch("/json").then((res) => res.json())
}

async function refreshProductEntries() {
    document.getElementById("product_entry_cards").innerHTML = "";
    document.getElementById("product_entry_cards").className = "";
    const productEntries = await getProductEntries();
    let htmlString = "";
    let classNameString = "";

    if (productEntries.length === 0) {
        classNameString = "flex flex-col items-center justify-center min-h-[24rem] p-6";
        htmlString = `
            <div class="flex flex-col items-center justify-center min-h-[24rem] p-6">
                <img src = "static/image/sedih-banget.png" alt="Sad face" class="w-32 h-32 mb-4 opacity-50"/> 
                <p class="text-center texct-gray-600 mt-4 opacity-50">No product entries found</p>
            </div>   
        `
    }
    else {
        classNameString = "columns-1 sm:columns-2 lg:columns-2 gap-6 space-y-6 w-full"
        productEntries.forEach((item) => {
            const name = DOMPurify.sanitize(item.fields.name);
            const description = DOMPurify.sanitize(item.fields.description);
            htmlString += `
            <div
                class="mx-auto flex flex-col items-center justify-between bg-[#303030] break-inside-avoid h-auto p-10 shadow-inner shadow-[#353535] transition-transform transform hover:scale-105"
            >
                <p class="text-xl bold">${name}</p>
                <p class="text-md italic">${item.fields.price}</p>
                <p class="whitespace-nowrap text-wrap">${description}</p>

                <div class="flex justify-between w-full mt-4">
                    <a
                        href="/edit-product/${item.pk}"
                        class="group relative py-2 px-4 border border-transparent text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-2 focus:ring-offset-2 focus:ring-white transition duration-300"
                    >
                    Edit
                    </a>
                    <a
                        href="/delete/${item.pk}"
                        class="group relative py-2 px-4 border border-transparent text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-white transition duration-300"
                    >
                        Delete
                    </a>
                </div>
            </div>
            `;
        });
    }
    document.getElementById("product_entry_cards").className = classNameString;
    document.getElementById("product_entry_cards").innerHTML = htmlString;
}
refreshProductEntries();