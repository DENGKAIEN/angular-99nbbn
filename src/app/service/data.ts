import * as pic from './pic';
export const categories = [
    {
        head: { key: 'productline', value: 'productline', label: 'Product Line' },
        items: [
            { key: 'mobile', value: 'mobile', label: 'Mobile', count: 534 },
            { key: 'broadband', value: 'broadband', label: 'Broadband', count: 632 },
        ],
        parentKey: null,
        isShow: true
    },
    {
        head: { key: 'plancategory', value: 'plancategory', label: 'Plan Category' },
        items: [
            { key: 'general', value: 'general', label: 'General', count: 1007 },
            { key: 'staff', value: 'staff', label: 'Staff', count: 43 },
            { key: 'domestichelper', value: 'domestichelper', label: 'Domestic Helper', count: 43 },
            { key: 'student', value: 'student', label: '11-17 age student ', count: 43 },
        ],
        parentKey: null,
        isShow: true
    },
    {
        head: { key: 'mobileplan', value: 'mobileplan', label: 'Mobile Plan' },
        items: [
            { key: 'simonly', value: 'simonly', label: 'SIM only', count: 50 },
            { key: 'simstandalone', value: 'simstandalone', label: 'SIM + Standalone', count: 167 },
            { key: 'simcoupon', value: 'simcoupon', label: 'SIM + Coupon', count: 244 },
            { key: 'simhandset', value: 'simhandset', label: 'SIM + Handset', count: 132 },
        ],
        parentKey: null,
        isShow: true
    },
    {
        head: { key: 'mobilebrand', value: 'mobilebrand', label: 'Mobile Brand' },
        items: [
            { key: 'csl', value: 'csl', label: 'CSL', count: 234 },
            { key: '1O1O', value: '1O1O', label: '1O1O', count: 312 },
        ],
        parentKey: null,
        isShow: true
    },
    {
        head: { key: 'ismup', value: 'ismup', label: 'is MUP' },
        items: [
            { key: 'yes', value: true, label: 'Yes', count: 252 },
            { key: 'no', value: false, label: 'No', count: 275 },
        ],
        parentKey: null,
        isShow: true
    },
    {
        head: { key: 'localdataincluded', value: 'localdataincluded', label: 'Local Data Included' },
        items: [
            { key: 'less10', value: 'less10', label: '< 10GB', count: 123 },
            { key: 'less20', value: 'less20', label: '10 -20 GB', count: 331 },
            { key: 'larger20', value: 'larger20', label: '> 20 GB', count: 86 },
        ],
        parentKey: null,
        isShow: true
    },
];
export const vascategories = [
    {
        head: { key: 'Monthly Rate', value: 'Monthly Rate', label: 'Monthly Rate' },
        items: [
            { key: '$0 - $100', value: '$0 - $100', label: '$0 - $100', count: 2 },
            { key: '$100 - $200', value: '$100 - $200', label: '$100 - $200', count: 1 },
            { key: '$200 or above', value: '$200 or above', label: '$200 or above', count: 0 },
        ],
        parentKey: null,
        isShow: true
    },
    {
        head: { key: 'Redeem Club Point', value: 'Redeem Club Point', label: 'Redeem Club Point' },
        items: [
            { key: '0 - 1000', value: '0 - 1000', label: '0 - 1000', count: 32 },
            { key: '1000 - 2000', value: '1000 - 2000', label: '1000 - 2000', count: 43 },
            { key: '2000 or above', value: '2000 or above', label: '2000 or above', count: 43 },
        ],
        parentKey: null,
        isShow: true
    },
    {
        head: { key: 'Category', value: 'Category', label: 'Category' },
        items: [
            { key: 'Apple Care', value: 'Apple Care', label: 'Apple Care', count: 13 },
            { key: 'Capacity Pass', value: 'Capacity Pass', label: 'Capacity Pass', count: 53 },
            { key: 'Mobile Data Service', value: 'Mobile Data Service', label: 'Mobile Data Service', count: 4 },
        ],
        parentKey: null,
        isShow: true
    },
    {
        head: { key: 'Local Data', value: 'Local Data', label: 'Local Data' },
        items: [
            { key: '0 - 10GB', value: '0 - 10GB', label: '0 - 10GB', count: 31 },
            { key: '10GB - 20GB', value: '10GB - 20GB', label: '10GB - 20GB', count: 54 },
            { key: '20GB or above', value: '20GB or above', label: '20GB or above', count: 45 },
        ],
        parentKey: null,
        isShow: true
    },
    {
        head: { key: 'Contract Period', value: 'Contract Period', label: 'Contract Period' },
        items: [
            { key: '12 Months', value: '12 Months', label: '12 Months', count: 32 },
            { key: '24 Months', value: '24 Months', label: '24 Months', count: 43 },
            { key: '36 Months', value: '36 Months', label: '36 Months', count: 43 },
        ],
        parentKey: null,
        isShow: true
    },
];
export const recom = [
    {
        tags: [
            { value: 'ACQ', color: '#398eda' },
            { value: 'SALE', color: '#f45555' },
        ],
        picture: pic.iphone_xs,
        info: {
            price: 0,
            clubPoint: null,
            desc: '(20GB->30GB)'
        },
        detail: {
            name: 'Apple iPhone XS 256GB',
            type: 'offer',
            skuCode: '31005',
            descs: [
                'Ultra Speed User Plan',
                'Upfront $8299 ',
                '(Full Rebate)',
                'Unlimited minutes',
                '20GB Local Data',
            ]
        },
        starts: 4,
        plan: {
            name: 'Ultra Speed User Plan',
            oriPrice: 888,
            price: 738,
            per: 'month',
            period: 24,
            other: '',
            localData: 20
        },
        isMup: false
    },
    {
        tags: [
            { value: 'ACQ', color: '#398eda' },
        ],
        picture: pic.iphone_xs,
        info: {
            price: 3380,
            clubPoint: null,
            desc: '(20GB)'
        },
        detail: {
            name: 'Apple iPhone XS 256GB',
            skuCode: '31005',
            type: 'offer',
            descs: [
                'Ultra Speed User Plan',
                'Upfront $8299 ',
                '(Full Rebate)',
                'Unlimited minutes',
            ]
        },
        starts: 4,
        plan: {
            name: 'Ultra Speed User Plan',
            isDiy: true,
            oriPrice: null,
            price: 408,
            per: 'month',
            period: null,
            other: '',
            localData: null
        },
        isMup: false
    },
    {
        tags: [
            { value: 'ACQ', color: '#398eda' },
        ],
        picture: pic.iphone_xs,
        info: {
            price: 1380,
            clubPoint: 500,
            desc: '(20GB)'
        },
        detail: {
            name: 'Apple iPhone XS 256GB',
            skuCode: '31005',
            type: 'offer',
            descs: [
                'Ultra Speed User Plan',
                'Upfront $8299 ',
                '(Full Rebate)',
                'Unlimited minutes',
                '20GB Local Data',
            ]
        },
        starts: 4,
        plan: {
            name: 'Ultra Speed User Plan',
            oriPrice: null,
            price: 408,
            per: 'month',
            period: 24,
            other: '',
            localData: 20
        },
        isMup: false
    },
    {
        tags: [
            { value: 'SALE', color: '#f45555' },
        ],
        picture: pic.p30lite,
        info: {
            price: 0,
            clubPoint: null,
            desc: null,
            dependOnPeriod: true
        },
        detail: {
            name: 'HuaweiP30Lite(6GB+28GB)',
            skuCode: '31004',
            type: 'offer',
            descs: [

            ]
        },
        starts: 4,
        plan: {
            name: 'Ultra Speed User Plan',
            oriPrice: null,
            price: null,
            per: 'month',
            period: null,
            other: 'Handset as low as $0',
            localData: 20
        },
        isMup: false
    }
];
export const vasrecom = [
    {
        tags: [

        ],
        picture: pic.vas_item,
        info: {
            price: null,
            clubPoint: null,
            desc: null
        },
        detail: {
            name: 'Speed Data Package',
            type: 'vas',
            descs: [
                '10GB Local Data',
            ]
        },
        starts: 4,
        plan: {
            name: 'Speed data package',
            oriPrice: null,
            price: 38,
            per: 'month',
            period: 24,
            other: null,
            localData: 10
        },
        isMup: false
    },
    {
        tags: [

        ],
        picture: pic.vas_item,
        info: {
            price: null,
            clubPoint: null,
            desc: null
        },
        detail: {
            name: 'Speed Data Package',
            type: 'vas',
            descs: [
                '20GB Local Data',
            ]
        },
        starts: 4,
        plan: {
            name: 'Speed data package',
            oriPrice: null,
            price: 58,
            per: 'month',
            period: 24,
            other: null,
            localData: 20
        },
        isMup: false
    },
    {
        tags: [

        ],
        picture: pic.vas_item,
        info: {
            price: null,
            clubPoint: null,
            desc: null
        },
        detail: {
            name: 'Speed Data Package',
            type: 'vas',
            descs: [
                '40GB Local Data',
            ]
        },
        starts: 4,
        plan: {
            name: 'Speed data package',
            oriPrice: null,
            price: 108,
            per: 'month',
            period: 24,
            other: null,
            localData: 40
        },
        isMup: false
    },
    {
        tags: [

        ],
        picture: pic.network_sms,
        info: {
            price: null,
            clubPoint: null,
            desc: null
        },
        detail: {
            name: 'Inter-network SMS',
            type: 'vas',
            descs: [
                '90 SMS',
            ]
        },
        starts: 4,
        plan: {
            name: 'Inter-network SMS',
            oriPrice: null,
            price: 39,
            per: 'month',
            period: 24,
            other: null,
            localData: null
        },
        isMup: false
    }
]
export const otherRecom = [
    {
        tags: [
            { value: 'ACQ', color: '#398eda' },
        ],
        picture: pic.fiber,
        info: {
            price: null,
            clubPoint: null,
            desc: '1000M Fiber-to-the-Home Plan'
        },
        detail: {
            name: null,
            type: 'offer',
            descs: [
                '(Flat B, Floor 1, Lucky Mansion)',
                'uHub plus Cloud Storage',
                'NETVIGATOR SHiELD',
                'Norton Security',
            ]
        },
        starts: 4,
        plan: {
            oriPrice: null,
            price: null,
            per: null,
            period: null,
            other: 'As low as $228'
        },
        isMup: false
    },
    {
        tags: [
            { value: 'Upgrade', color: '#00CC00' },
        ],
        picture: pic.fiber,
        info: {
            price: null,
            clubPoint: null,
            desc: 'PON Upgrade on  existing broadband'
        },
        detail: {
            name: null,
            type: 'offer',
            descs: [
                '(subscriber id: 144244243, brandwong@netvigator.com)',
                '1000M Fiber-to-the-Home Plan',
            ]
        },
        starts: 4,
        plan: {
            oriPrice: null,
            price: null,
            per: null,
            period: null,
            other: 'As low as $58'
        },
        isMup: false
    },
    {
        tags: [
            { value: 'Upgrade', color: '#00CC00' },
        ],
        picture: pic.retention,
        info: {
            price: null,
            clubPoint: null,
            desc: 'Retention on existing mobile'
        },
        detail: {
            name: null,
            type: 'offer',
            descs: [
                '(subscriber id: 24124144, MRT: 60000003)',
                'Ultra Speed User Plan',
                'Unlimited minutes',
                '20GB Local Data',
            ]
        },
        starts: 4,
        plan: {
            oriPrice: null,
            price: 438,
            per: 'month',
            period: 24,
            other: null
        },
        isMup: false
    },
    {
        tags: [
            { value: 'Upgrade', color: '#00CC00' },
        ],
        picture: pic.vas86e,
        info: {
            price: null,
            clubPoint: null,
            desc: 'Add VAS on existing mobile'
        },
        detail: {
            name: null,
            type: 'offer',
            descs: [
                '(subscriber id: 24124243, MRT: 96669555)',
                '86-Easy',
            ]
        },
        starts: 4,
        plan: {
            oriPrice: null,
            price: 18,
            per: 'month',
            period: 24,
            other: null
        },
        isMup: false
    },
];

export const clrecom = [
    {
        tags: [
            { value: 'ACQ', color: '#398eda' },
        ],
        picture: pic.a3,
        info: {
            price: null,
            clubPoint: null,
            desc: null
        },
        detail: {
            name: 'XIAOMI MI A3',
            type: 'offer',
            descs: [
                'Suggested retail price: $1799',
            ]
        },
        starts: 4,
        plan: {
            name: 'Ultra Speed User Plan',
            oriPrice: null,
            price: null,
            per: null,
            period: null,
            other: 'As low as $228',
            localData: 20
        },
        payment: [
            { type: 'point', clubpoint: 900, cash: null },
            { type: 'mix', clubpoint: 100, cash: 1680 }
        ],
        isMup: false
    },
];

export const sim = [
    {
        type: 'CU JOC CSL 64K SIMTRIO-H(C)',
        chargeAmt: 0,
        waiveIndicator: 'No',
        waiveReason: '',
        action: [
            'Edit'
        ],
        skuCode: '2100141'
    },
    {
        type: 'CSL NFC AIO SIMTRIO-H(C)',
        chargeAmt: 0,
        waiveIndicator: 'No',
        waiveReason: '',
        action: [
            'Edit'
        ],
        skuCode: '2100140'
    }
]

export const engagementResponse = [
    {
        orderNature: 'new',
        touchedOffer: 'HuaweiP30Lite(6GB+28GB)',
        engagementResponse: null
    },
    {
        orderNature: 'new',
        touchedOffer: 'Apple iPhone XS 256GB',
        engagementResponse: null
    }
];

export const relationship = [
    {
        subscriber: '(new group subscriber) MUP group 1',
        customer: 'HKID Z123XXX(2) Miss Wong Tai Yan Brenda',
        relationship: 'Me',
        action: ['Edit']
    },
    {
        subscriber: '(new subscriber) 90000002',
        customer: 'paul@yahoo.com',
        relationship: 'Son',
        action: ['Edit']
    },
    {
        subscriber: '(new subscriber) 90000003',
        customer: 'may@netvigator.com',
        relationship: 'Daughter',
        action: ['Edit']
    }
]

export const upfrontPaymentInformation = [
    {
        item:'Apple iPhone XS 256GB (Silver)',
        chargeAmt:'$8299',
        waiveIndicator:'No',
        waiveReason:'',
        action:[
        ]
    },
    {
        item:'Ultra Speed Service Plan 20GB Local Data',
        chargeAmt:'$738',
        waiveIndicator:'No',
        waiveReason:'',
        action:[
        ]
    },
    {
        item:'Tunnel Service Fee',
        chargeAmt:'$18',
        waiveIndicator:'No',
        waiveReason:'',
        action:[
            'Edit'
        ]
    },
]

export const resourceStockBalance = [
    {
        qty:1,
        resourceType:'Sim Card',
        resourceName:'C-SIM',
        skuCode:'2100141',
        skuName:'CSL 64K USIM SIMTRIO',
        avaQty:1204,
    },
    {
        qty:1,
        resourceType:'Handset',
        resourceName:'Handset',
        skuCode:'310054',
        skuName:'Apple iPhone XS 256GB (Silver)',
        avaQty:34,
    }
]

export const deliveryDetails = [
    {
        trackingNumber:'',
        serviceNo:'90000001',
        status:'To Deliver',
        SKUCode:'2100141',
        SKUName:'CSL 64K USIM SIMTRIO',
        ICCIDIMEI:'',
        action:'',
        reason:'',
    },
    {
        trackingNumber:'',
        serviceNo:'90000001',
        status:'To Deliver',
        SKUCode:'310054',
        SKUName:'Apple iPhone XS 256GB (Silver)',
        ICCIDIMEI:'',
        action:'',
        reason:'',
    }
]

export const pickupDetails = [
    {
        serviceNo:'90000001',
        status:'To Pickup',
        SKUCode:'2100141',
        SKUName:'CSL 64K USIM SIMTRIO',
        ICCIDIMEI:'8985200092181001331',
        action:'',
        reason:'',
    },
    {
        serviceNo:'90000001',
        status:'To Pickup',
        SKUCode:'310054',
        SKUName:'Apple iPhone XS 256GB (Silver)',
        ICCIDIMEI:'356938035643809',
        action:'',
        reason:'',
    }
];
export const recommendedOffer = [
    {
       
        picture: pic.iphone_xs,
        priceInfo: {
            oriPrice:null,
            price: 408,
        },
        localData:'10GB',   
        minutes:'Unlimited minutes',
        name:'Apple iPhone XS 256GB',
        ultra:'Ultra Speed User Plan',
        upfront:'Upfront $8299(Rebate: $4919)',
        starts: 4,   
        isMup: false,
    },
    {
       
        picture: pic.p30lite,
        priceInfo: {
            oriPrice:358,
            price: 308,
        },
        localData:'10GB',   
        minutes:'Unlimited minutes',
        name:'Huawei P30 Lite (6GB+28GB)',
        ultra:'Ultra Speed User Plan',
        upfront:'Upfront $2199(Full Rebate)',
        starts: 4,   
        isMup: false,
    },
    
];


export const categoryForCustomer = [
    {
        head: { key: 'productline', value: 'productline1', label: 'Product Line' },
        items: [
            { key: 'mobile', value: 'mobile', label: 'Mobile', count: 534 },
            { key: 'broadband', value: 'broadband', label: 'Broadband', count: 632 },
        ],
        parentKey: null,
        isShow: true
    },
    {
        head: { key: 'plancategory', value: 'plancategory', label: 'Plan Category' },
        items: [
            { key: 'general', value: 'general', label: 'General', count: 1007 },
            { key: 'staff', value: 'staff', label: 'Staff', count: 43 },
            { key: 'domestichelper', value: 'domestichelper', label: 'Domestic Helper', count: 43 },
            { key: 'student', value: 'student', label: '11-17 age student ', count: 43 },
        ],
        parentKey: null,
        isShow: true
    },
    {
        head: { key: 'mobileplan', value: 'mobileplan', label: 'Mobile Plan' },
        items: [
            { key: 'simonly', value: 'simonly', label: 'SIM only', count: 50 },
            { key: 'simstandalone', value: 'simstandalone', label: 'SIM + Standalone', count: 167 },
            { key: 'simcoupon', value: 'simcoupon', label: 'SIM + Coupon', count: 244 },
            { key: 'simhandset', value: 'simhandset', label: 'SIM + Handset', count: 132 },
        ],
        parentKey: null,
        isShow: true
    },
    {
        head: { key: 'mobilebrand', value: 'mobilebrand', label: 'Mobile Brand' },
        items: [
            { key: 'csl', value: 'csl', label: 'CSL', count: 234 },
            { key: '1O1O', value: '1O1O', label: '1O1O', count: 312 },
        ],
        parentKey: null,
        isShow: true
    },
   
    {
        head: { key: 'monthlyfee', value: 'monthlyfee', label: 'Monthly Fee' },
        items: [
            { key: 'level', value: 'level', label: '$0-$300', count: 0 },
            { key: 'leve2', value: 'leve2', label: '$300-$600', count: 2 },
            { key: 'leve3', value: 'leve3', label: '$600 or above', count: 1 },
        ],
        parentKey: null,
        isShow: true
    },
];


