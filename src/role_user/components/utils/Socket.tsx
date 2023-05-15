import { useEffect } from "react";
import {
	socketModalMessageCreate,
	socketModalMessageDestroy,
	socketStatusConnectCreate,
	socketStatusConnectDestroy,
	socketStatusDisconnectCreate,
	socketStatusDisconnectDestroy,
} from "../../../role_all/socket/service";
import {
	socketDeleteJWTCreate,
	socketDeleteJWTDestroy,
	socketGetJWTCreate,
	socketGetJWTDestroy,
} from "../../../role_all/socket/auth";
import {
	socketGetLikeCreate,
	socketGetLikeDestroy,
	socketSetLikeCreate,
	socketSetLikeDestroy,
} from "../../socket/likes";
import {
	socketSetBannedUsersCreate,
	socketSetBannedUsersDestroy,
	socketSetFavoriteUsersCreate,
	socketSetFavoriteUsersDestroy,
} from "../../socket/users";
import {
	socketDialogCreate,
	socketDialogDestroy,
	socketMessageCreate,
	socketMessageDestroy,
} from "../../../role_all/socket/dialogs";
import { socketClient } from "../../../role_all/socket/socket";

export function Socket() {
	useEffect(() => {
		socketStatusConnectCreate();
		socketStatusDisconnectCreate();
		socketGetJWTCreate();
		socketDeleteJWTCreate();
		socketModalMessageCreate();
		socketMessageCreate();
		socketDialogCreate();
		socketSetLikeCreate();
		socketGetLikeCreate();
		socketSetFavoriteUsersCreate();
		socketSetBannedUsersCreate();

		return () => {
			socketStatusConnectDestroy();
			socketStatusDisconnectDestroy();
			socketGetJWTDestroy();
			socketDeleteJWTDestroy();
			socketModalMessageDestroy();
			socketMessageDestroy();
			socketDialogDestroy();
			socketSetLikeDestroy();
			socketGetLikeDestroy();
			socketSetFavoriteUsersDestroy();
			socketSetBannedUsersDestroy();

			socketClient.close();
		};
	}, []);

	return <></>;
}
