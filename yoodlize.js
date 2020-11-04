module.exports = {
    beforeEach: browser => {
        browser.url('https://www.yoodlize.com/')
    },
    after: browser => {
        browser.end()
    },
    'Yoodalize See All Functions': browser => {
        browser
        .useXpath()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Recreational Vehicles")
        .back()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[2]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Outdoor Gear")
        .back()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[3]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Electronics")
        .back()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[4]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Party & Wedding Equipment")
        .back()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[5]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Tools")
        .back()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[6]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Clothing")
        .back()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[7]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Home and Kitchen")
        .back()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[8]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Toys and Games")
        .back()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[9]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Lawn and Garden")
        .back()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[10]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Sporting Equipment")
        .back()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[11]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "DVDs")
        .back()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[12]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Venues")
        .back()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[13]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Music")
        .back()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[14]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Business Equipment")
        .back()
        .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[15]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Misc")
        .back()
        //Now Testing buttons on bottom of Home Screen
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[1]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Tools")
        .back()
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[2]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Outdoor Gear")
        .back()
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[3]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Electronics")
        .back()
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[4]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Party & Wedding Equipment")
        .back()
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[5]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Recreational Vehicles")
        .back()
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[6]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Clothing")
        .back()
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[7]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Home and Kitchen")
        .back()
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[8]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Toys and Games")
        .back()
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[9]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Lawn and Garden")
        .back()
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[10]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Sporting Equipment")
        .back()
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[11]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "DVDs")
        .back()
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[12]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Venues")
        .back()
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[13]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Music")
        .back()
        .click('(//div[@class="h-125 p-s f f-rows f-start-center bg-offWhite"])[15]')
        .verify.containsText('(//div[@class="sc-jKVCRD jSqgxr"])', "Misc")
        .back()

    }
}