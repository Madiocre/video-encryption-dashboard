import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Interface for Collection
interface VidCollection {
  id: string;
  name: string;
  videoCount: number;
  videos: string[];
}

const VideosPage: React.FC = () => {
  // State for Collections (in a real app, this would be populated via API)
  const [vidCollections, setVidCollections] = useState<VidCollection[]>([
    { 
      id: '1', 
      name: 'Sample Collection', 
      videoCount: 3, 
      videos: ['Video 1', 'Video 2', 'Video 3'] 
    }
  ]);

  return (
    <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto gap-4 p-4">
      <h1 className="text-2xl font-semibold mb-4">Videos</h1>

      {/* Videos Section */}
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Collection Details</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Collection Name</TableHead>
              <TableHead>Video Count</TableHead>
              <TableHead>Videos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vidCollections.map((collection) => (
              <TableRow key={collection.id}>
                <TableCell>{collection.name}</TableCell>
                <TableCell>{collection.videoCount}</TableCell>
                <TableCell>
                  {collection.videos.join(', ')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default VideosPage;

// import React, { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Film, Play } from "lucide-react";

// interface VideoData {
//   id: string;
//   videoId: string;
//   collectionId: string;
//   name: string;
//   // Placeholder for potential video details
//   // videoUrl?: string;
//   // thumbnailUrl?: string;
// }

// const VideoPage: React.FC = () => {
//   const [video, setVideo] = useState<VideoData>({
//     id: '',
//     videoId: '',
//     collectionId: '',
//     name: ''
//   });

//   const [isEditing, setIsEditing] = useState(false);

//   // Placeholder for video playback 
//   // In a real implementation, this would use an actual video player
//   const renderVideoPlayer = () => {
//     return (
//       <div className="aspect-video bg-black flex items-center justify-center text-white">
//         {video.videoId ? (
//           <div className="text-center">
//             {/* Placeholder for actual video embed */}
//             <Play className="mx-auto mb-4" size={64} />
//             <p>Video: {video.name}</p>
//             <p>Video ID: {video.videoId}</p>
//           </div>
//         ) : (
//           <div className="flex flex-col items-center">
//             <Film className="mb-4" size={64} />
//             <p>No video selected</p>
//           </div>
//         )}
//       </div>
//     );
//   };

//   const handleSave = () => {
//     // In a real app, this would likely involve API calls
//     setIsEditing(false);
//   };

//   return (
//     <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto gap-4 p-4">
//       <h1 className="text-2xl font-semibold mb-4">Video Display</h1>

//       <Card>
//         <CardHeader>
//           <CardTitle>
//             {isEditing ? "Edit Video Details" : "Video Player"}
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           {isEditing ? (
//             <div className="space-y-4">
//               <div>
//                 <Label>Video ID</Label>
//                 <Input 
//                   value={video.videoId}
//                   onChange={(e) => setVideo({...video, videoId: e.target.value})}
//                   placeholder="Enter Video ID"
//                 />
//               </div>
//               <div>
//                 <Label>Collection ID</Label>
//                 <Input 
//                   value={video.collectionId}
//                   onChange={(e) => setVideo({...video, collectionId: e.target.value})}
//                   placeholder="Enter Collection ID"
//                 />
//               </div>
//               <div>
//                 <Label>Video Name</Label>
//                 <Input 
//                   value={video.name}
//                   onChange={(e) => setVideo({...video, name: e.target.value})}
//                   placeholder="Enter Video Name"
//                 />
//               </div>
//               <div className="flex justify-end space-x-2">
//                 <Button variant="outline" onClick={() => setIsEditing(false)}>
//                   Cancel
//                 </Button>
//                 <Button onClick={handleSave}>
//                   Save
//                 </Button>
//               </div>
//             </div>
//           ) : (
//             <>
//               {renderVideoPlayer()}
//               <div className="mt-4 flex justify-between items-center">
//                 <div>
//                   {video.name && (
//                     <p className="text-sm font-medium">
//                       {video.name}
//                     </p>
//                   )}
//                   {video.videoId && (
//                     <p className="text-sm text-muted-foreground">
//                       Video ID: {video.videoId}
//                     </p>
//                   )}
//                 </div>
//                 <Button variant="outline" onClick={() => setIsEditing(true)}>
//                   Edit Video
//                 </Button>
//               </div>
//             </>
//           )}
//         </CardContent>
//       </Card>

//       {/* Commented placeholder for future video upload/stream functionality */}
//       {/* <div>
//         <h2>Potential Future Features</h2>
//         <ul>
//           <li>Direct video upload</li>
//           <li>Video streaming integration</li>
//           <li>Advanced player controls</li>
//           <li>Playback analytics</li>
//         </ul>
//       </div> */}
//     </div>
//   );
// };

// export default VideoPage;