function calculateTime(packageType) {
    let deliveryTime;

    switch (packageType.toLowerCase()) {
        case "standard":
            deliveryTime = "3-5 days";
            break;
        case "express":
            deliveryTime = "1-2 days";
            break;
        case "overnight":
            deliveryTime = "next day";
            break;
        default:
            deliveryTime = "unknown package";
    }

    console.log(`The estimated delivery time for ${packageType} package is: ${deliveryTime}`);
}


calculateTime("standard");  // Output: The estimated delivery time for standard package is: 3-5 days
calculateTime("express");   // Output: The estimated delivery time for express package is: 1-2 days
calculateTime("overnight"); // Output: The estimated delivery time for overnight package is: next day
calculateTime("same-day");  // Output: The estimated delivery time for same-day package is: unknown package type
