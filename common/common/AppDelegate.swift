import UIKit
import BNBSdkApi

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
    var banubaClientToken: String = <#"Qk5CIKOSNCbfAajweLe/fYWCTeO7nE5NUWaS9rDG2GFe2rUzs/TuVsXMuoWNtWYI3istrCPlnTO3FX+VL+LY4HA/Y/FIDvuDlLFbgAZv80SHFVOzSADgUh0jN47/fOXCErc/9AMNZl5J3vJ5y8AWKTzta2GstgM8oiNc1JhdQqLkhryKmgZmzWxxLoa8CJ0d+DqKYDsgJneWhyVmXkOxo1mSmVEY7BVjJbhpzaLOVcxrA8GyLqqaqXJLLNQpJYwcF9+HYfCq9eQzya/DhONbJVgwDX9WVJ1JICxPjFRgMtxPUbUE1ojVyCCf1mdjfMx8QfbFVB3qSABmeK8ZCmNZwkCDTTsAr0x+FMjDf307qBIgtqnjhvlonSlClsLDVUhdpzpj61nfrglt3BbGCAX4kb3b6y21ehbPRJOJPkzUABwbZxDHTYM9Mt9SZtU/FxwO/NRd3sC5ZDBiiAodGU4N1BcbwTA0qGQvg/x59eqxnB2sos/VkwlynDMUD1fzHfPgRxE4DQg0PLntBN1wHpcluVYFvjHk0aRxfy7WtXZ3922Vlxl9FH2zvBEWSkHI0zjKlz5j6jFGxCM0ulqLsEd7TP8zKK0rq4PCCIsuBiOwyknztzbqSVp0wDtAZhGFLAAykutOn8wa7De1wjGkBUbv3Q=="#>

    var window: UIWindow?

    func application(
        _ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
    ) -> Bool {
        BanubaSdkManager.initialize(
            // This is array of paths where to seach for resources. E.g. for effects
            resourcePath: [
                Bundle.main.bundlePath + "/effects",
                Bundle.main.bundlePath // also seacrh dirrectly in app bundle
            ],
            clientTokenString: banubaClientToken
        )
        return true
    }
}

