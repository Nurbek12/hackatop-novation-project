import {
    PhBathtub,
    MdRoundLocalDining,
    ByWork,
    CoBed,
    MdOutlinedLight,
    MdTwoToneSoupKitchen,
    MiLightbulbShine,
    LuHeater,
    MdOutlinedWindPower,
    ClTimer,
    IcDimmerSwitch,
    FeBatteryCharging,
    MdOutlinedPower,
    CaMeter,
    TaCircuitSwitchOpen,
    MdRoundElectricalServices,
    MdRoundElectricBolt,
    ReOutlet2Line,
} from '@kalimahapps/vue-icons'

export const room_types = [
    { img: '/images/living-room.jpg', title: 'Living Room', icon: MdOutlinedLight },
    { img: '/images/kitchen.jpg', title: 'Kitchen', icon: MdTwoToneSoupKitchen },
    { img: '/images/bedroom.jpg', title: 'Bedroom', icon: CoBed },
    { img: '/images/bathroom.jpg', title: 'Bathroom', icon: PhBathtub },
    { img: '/images/dining-room.jpg', title: 'Dining Room', icon: MdRoundLocalDining },
    { img: '/images/office.jpg', title: 'Office', icon: ByWork },
]

export const devices = [
    { id: 0, title: 'Power Strip', icon: MdOutlinedPower },
    { id: 1, title: 'Dimmer Switch', icon: IcDimmerSwitch },
    { id: 2, title: 'Outlet Timer', icon: ClTimer },
    { id: 3, title: 'Surge Protector', icon: MdRoundElectricBolt },
    { id: 4, title: 'Battery Backup', icon: FeBatteryCharging },
    { id: 5, title: 'Voltage Meter', icon: CaMeter },
    { id: 6, title: 'Circuit Breaker', icon:TaCircuitSwitchOpen },
    { id: 7, title: 'Extension Cord', icon: MdRoundElectricalServices },
    { id: 8, title: 'GFCI Outlet', icon: ReOutlet2Line },
    { id: 9, title: 'Light Bulb', icon: MiLightbulbShine },
    { id: 10, title: 'Ceiling Fan', icon: MdOutlinedWindPower },
    { id: 11, title: 'Space Heater', icon: LuHeater },
]