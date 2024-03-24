import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

const Create = () => {
  return (
    <div className='flex justify-center mt-[21rem]'>
 <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Continent</TabsTrigger>
        <TabsTrigger value="password">Region</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Continent</CardTitle>
              <CardDescription>
                Create a parent continent to ease Distributed Computation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name of Continent</Label>
              <Input id="name" defaultValue="Asia" />
            </div>
            <div className="space-y-1">
            </div>
          </CardContent>
          <CardFooter>
            <Button>Create</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Create Region</CardTitle>
            <CardDescription>
                Create a regional subnet to ease Distributed Computation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Subnet Region</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Regional Validator</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Create</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
</div>
  )
}

export default Create