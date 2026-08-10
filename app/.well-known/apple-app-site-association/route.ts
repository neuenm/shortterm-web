import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    applinks: {
      apps: [],
      details: [
        {
          appID: "TODO_APPLE_TEAM_ID.com.neuenm.shortterm", // TODO: replace TODO_APPLE_TEAM_ID
          paths: ["/listing/*"],
        },
      ],
    },
  });
}
