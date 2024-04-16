import UIKit
import BNBSdkApi

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
    var banubaClientToken: String = <#Place your token here#>

    var window: UIWindow?

    func application(
        _ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
    ) -> Bool {
        BanubaSdkManager.initialize(
            resourcePath: [Bundle.main.bundlePath + "/effects"],
            clientTokenString: banubaClientToken
        )
        return true
    }
}

