// Must use Create Plates

ServerEvents.recipes(event => {
    event.remove({id:'ad_astra:hammering/iron_plate'})
})

ServerEvents.recipes(event => {
    event.remove({id:'ad_astra:compressing/iron_plate_from_compressing_iron_ingot'})
})